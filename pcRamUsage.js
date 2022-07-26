const os = require('os');

setInterval(() =>{
    const {arch, platform, freemem, totalmem} = os;
    const TotalRAM  = (((totalmem()/1024)/1024)/1024).toFixed(3);
    const FreeRAM   = (((freemem()/1024)/1024)/1024).toFixed(3);
    const Usage     = (((FreeRAM/TotalRAM)*100)-100)*(-1);
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM:   `${TotalRAM} GB`,
        FreeRAM:    `${FreeRAM} GB`,
        UsageRAM:   `${parseInt(Usage)}%`,
    };
    console.clear();
    console.table(stats);
    
    exports.stats = stats;
    
}, 1000);

