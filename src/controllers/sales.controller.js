import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const countSale = async (req, res) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    const basePath = path.join(__dirname, '..', '..', 'ventas');
    const dayFile = path.join(basePath, `ventas.json`);
    
    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
    }

    let fileData = {[`${day}-${month}-${year}`]: {count: 0}};
    
    if (fs.existsSync(dayFile)) {
        try {
            const rawData = fs.readFileSync(dayFile);
            fileData = JSON.parse(rawData);
        } catch (error) {
            return res.status(500).send('Error al leer el archivo JSON');
        }
    }
    
    if (!fileData[`${day}-${month}-${year}`]) {
        fileData[`${day}-${month}-${year}`] = {count: 0};
    }

    fileData[`${day}-${month}-${year}`].count++;
    
    try {
        fs.writeFileSync(dayFile, JSON.stringify(fileData, null, 2));
        res.status(200).send({totalSales: fileData[`${day}-${month}-${year}`].count.toString()});
    } catch (error) {
        res.status(500).send('Error al escribir el archivo JSON');
    }
}
