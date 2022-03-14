import { Default } from '../../../config.yaml'
console.log(1);
console.log(Default);
const configs = {
    server: {
        name: Default.name,
        port: Default.port || 8081
    }
}

export default configs;