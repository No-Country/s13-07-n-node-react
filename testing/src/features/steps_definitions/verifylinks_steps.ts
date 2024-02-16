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
    // await page.goto(URL)
});

Given('que estoy en la página principal de la aplicación', async () => {

});

When('inspecciono todos los enlaces en la página', async () => {

});

// Escenario @leer-sheets de excel y google
Then('cada enlace debería responder con un estado HTTP 200 OK al invocarlos', async () => {

});

After( async () => {

});