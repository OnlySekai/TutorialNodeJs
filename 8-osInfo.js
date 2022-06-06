const os=require(`os`);

const osInfo={
    type:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(os.userInfo());
console.log(`the system uptime is ${os.uptime()} seconds`);