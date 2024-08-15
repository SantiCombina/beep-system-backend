import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getConfig = async (req, res) => {
    const basePath = path.join(__dirname, '..', '..', 'configuracion');
    const configFile = path.join(basePath, `precios.json`);

    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
    }

    let fileData = {};

    if (fs.existsSync(configFile)) {
        try {
            const rawData = fs.readFileSync(configFile);
            fileData = JSON.parse(rawData);
        } catch (error) {
            return res.status(500).send('Error al leer el archivo JSON');
        }
    }

    res.status(200).send(fileData);
}
