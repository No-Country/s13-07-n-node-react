import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page} from 'playwright';
import { Elements } from '../pages/objectModel';

let browser;
let page: Page
let elements: Elements
let segundos = 1900
const browserName = 'firefox'
const escenario1 = '@agregar-producto'
const escenario2 = '@eliminar-producto'

Before( { timeout: 10000 }, async () => {
    browser = await firefox.launch({ headless: true });
    page = await browser.newPage();
    elements = new Elements(page)
});

Given('el usuario {string} accede con su contraseña {string} en la web app {string}', async function (user: string, pass: string, URL: string)  {

});

// Nav | TS 01
Given('accedo en la pagina {string}', async (link: string) => {

});

When('se realiza clic en todos los enlaces buscados', async () => {

});

Then('deben redirigir corretamente a la url de destino', async () => {
    
});

Then('deben devolver un codigo de estado HTTP 200 OK', async () => {

});


Then('deben ser accesible y cargar correctamente', async () => {

});

Then('los enlaces debe utilizar el protocolo correcto \\(HTTP o HTTPS)', async () => {

});

After( async () => {

});

// Nav | TS 02 | TC 01
Given('que estoy en la pagina {string}', async (link: string) => {

});

When('se buscan todos los enlaces internos', async () => {

});

Then('se verifica que no haya un codigo de http de error', async () => {
    
});
