// login-page.ts
import { Page } from 'playwright';
import fetch from 'node-fetch';
import { expect } from 'chai';
// import accessGoogleSheet from '../../utils/googleSheetAcces';
// import accessExcelSheet from '../../utils/excelSheets';

export class Elements {
    public static readonly UsernameInput = '[data-test="username"]';
    public static readonly PasswordInput = '[data-test="password"]';
    public static readonly SubmitButton = 'input[type="submit"]';

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async enterUsername(username: string): Promise<void> {
        await this.page.fill(Elements.UsernameInput, username);
        console.log(`Entering username: ${username}`);
    }

    public async enterPassword(password: string): Promise<void> {
        await this.page.fill(Elements.PasswordInput, password);
        console.log(`Entering password: ${password}`);
    }

    public async clickSubmit(): Promise<void> {
        await this.page.waitForSelector(Elements.SubmitButton);
        await this.page.click(Elements.SubmitButton);
        console.log('Clicking submit button');
    }

    public async verificarRedireccion(nombrePagina: string) {
        expect(this.page.url()).contain(nombrePagina, `El enlace "${nombrePagina}" no redirige correctamente`);
    }
    
    public async verificarEstadoHTTP() {
        const respuesta = await fetch(this.page.url());
        expect(respuesta.status).to.equal(200, `El enlace no devuelve un estado 200`);
    }
    
    public async verificarAccesibilidadYCargaCorrecta() {
        // Código para verificar accesibilidad y carga correcta
    }
    
    public async verificarProtocolo() {
        const protocolo = new URL(this.page.url()).protocol;
        expect(protocolo).to.match(/https?:/, `El enlace no utiliza un protocolo HTTP o HTTPS`);
    }

    public async buscarEnlaces() {
        const enlacesNavegacion = await this.page.$$('nav a');
        for (const enlace of enlacesNavegacion) {
            const urlDestino = await enlace.getAttribute('href');
            await enlace.click();
            const urlActual = this.page.url();
            // Verificar que la URL actual coincida con la URL de destino del enlace
            expect(urlActual).to.equal(urlDestino, `El enlace ${await enlace.textContent()} no redirige correctamente`);
            // Verificar el protocolo de la URL de destino
            const protocolo = new URL(urlDestino!).protocol;
            expect(protocolo).to.match(/https?:/, `El enlace ${await enlace.textContent()} no utiliza un protocolo HTTP o HTTPS`);
        }
    }
}
