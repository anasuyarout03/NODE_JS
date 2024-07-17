let os = require('os');
console.log(os.platform())
console.log(os.arch())
// console.log(os.cpus())
console.log(os.cpus().length+" cpus ")
console.log(os.freemem())
console.log(os.hostname())
console.log(os.uptime())