import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class JsonDataService {
  async readJsonFile(filePath: string): Promise<any> {
    try {
      const data = await readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('JSON file not found, creating....');
        return [];
      } else {
        console.error(`Error reading JSON file ${filePath}:`, error);
        throw error;
      }
    }
  }

  async writeJsonFile(filePath: string, entities: any[]): Promise<any> {
    try {
      const jsonData = JSON.stringify(entities);
      await writeFile(filePath, jsonData);
    } catch (error) {
      console.error(`Error writing JSON file ${filePath}:`, error);
      throw error;
    }
  }
}
