const path = require("path");
console.log(path.delimiter);

const filepath = path.join("/content", "subfolder", "text.txt")
// console.log(filepath)

const base = path.basename("./content", "subfolder", "text.txt");
// console.log(base)

const extname = path.extname(base);
// console.log(extname)

const resolve = path.resolve(__dirname, base);
// console.log(resolve)