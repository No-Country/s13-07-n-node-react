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

Given('accedo en la pagina {string}', async (link: string) => {


});

When('se realiza click el enlace {string}', async (enlace: string) => {

});

Then('debe redirigir corretamente a la pagina {string}', async (enlace: string) => {
    
});

Then('deber devolver un codigo de estado HTTP 200 OK', async () => {

});


Then('debe ser accesible y cargar correctamente', async () => {

});

Then('el enlace debe utilizar el protocolo correcto \\(HTTP o HTTPS)', async () => {

});

After( async () => {

});