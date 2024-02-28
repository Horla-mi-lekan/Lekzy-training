const os = require("os");
// console.log(os)

const osone = os.userInfo();
// console.log(osone)

// console.log(`the time is ${os.uptime()}`);

currentOS = {
    names: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    hostname: os.hostname(),
    version: os.version(),
    machine: os.machine(),
    userInfo: os.userInfo(),
    arch: os.arch(),
    networkInterfaces: os.networkInterfaces(),
}
console.log(currentOS)


