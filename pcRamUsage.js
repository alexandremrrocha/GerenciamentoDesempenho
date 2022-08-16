const os = require('os');
const osu = require('node-os-utils');
const cpu = osu.cpu

async function CPU() {
  const VarCPUUsage = await cpu.usage()
  console.log(`Uso da CPU: ${VarCPUUsage}%`)  
}

setInterval(() => {
  const { arch, platform, freemem, totalmem } = os;
  const TotalRAM = (((totalmem() / 1024) / 1024) / 1024).toFixed(3);
  const FreeRAM = (((freemem() / 1024) / 1024) / 1024).toFixed(3);
  const RAMUsage = (((FreeRAM / TotalRAM) * 100) - 100) * (-1);
  const Model = cpu.model()
  
  console.clear();
  
  console.log(`Modelo da CPU: ${Model}`)
  console.log(`Sistema Operacional: ` + platform())
  console.log(`Arquitetura: ` + arch())
  console.log(`Total de RAM: ${TotalRAM} GB`)
  console.log(`RAM Livre: ${FreeRAM} GB`)
  console.log(`Uso da RAM: ${parseInt(RAMUsage)}%`)
  CPU()

}, 5000);


