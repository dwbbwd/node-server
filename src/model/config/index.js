import jsYaml from 'js-yaml';
import fs from 'fs';
const cfg = jsYaml.load(fs.readFileSync(process.cwd() + '/config.yaml', 'utf8'));
export default cfg.Default;