import { Page, chromium} from 'playwright';
import { expect } from 'chai';
import { promises } from 'fs';

export class ApiRequestTest {

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async listaIntructores(url: string): Promise<void> {
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log('Respuesta de la API:', data);
        } catch (error) {
            console.error('Se produjo un error al obtener los datos:', error);
        }
    }

    public async crearInstructor(url: string, userData: any):Promise<void> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
            }
    
            const responseData = await response.json();
            console.log('Respuesta de la API:', responseData);
        } catch (error) {
            console.error('Se produjo un error al obtener los datos:', error);
        }
    }
    
}


