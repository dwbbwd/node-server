import fs from 'fs';
const files = fs.readdirSync(__dirname + '/model/models');
const jsFiles = files.filter(r => {
    return r.endsWith('.js');
}, files)
const model = {};
for (const file of jsFiles) {
    console.log(`import model from file ${file}`);
    const name = file.substring(0, file.length - 3);
    model[name] = require(__dirname + '/model/models' + file);
}
export default model;