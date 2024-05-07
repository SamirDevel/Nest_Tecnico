import * as path from 'path';
import * as fs from 'fs';
import Catch from './catch';

export default function readList(ruta:string){
    const filePath = path.resolve(process.cwd(), `src/${ruta}.json`);
    const data = fs.readFileSync(filePath, 'utf8');
    const elementos:any[] = JSON.parse(data);
    return elementos;
}
