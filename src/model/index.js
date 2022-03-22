import fs from 'fs';
const path = process.cwd() + '/src/model/models';
const files = fs.readdirSync(path);
console.log(files);
const jsFiles = files.filter(r => {
    return r.endsWith('.js');
}, files)
const model = {};
for (const file of jsFiles) {
    console.log(`import model from file ${file}`);
    const name = file.substring(0, file.length - 3);
    model[name] = require(path + '/' + file);
}
export default model;