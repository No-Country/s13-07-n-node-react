import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, firefox, Page, ElementHandle} from 'playwright';
import { Elements } from '../pages/objectModel';
import { Links } from '../pages/linksProperties'; 

let browser;
let page: Page
let elements: Elements
let links: Links
let segundos = 3000
const browserName = 'firefox'
const escenario1 = '@agregar-producto'
const escenario2 = '@eliminar-producto'

Before( async () => {
    browser = await firefox.launch({ headless: false });
    page = await browser.newPage();
    elements = new Elements(page)
    links = new Links(page)
});

Given('el usuario {string} accede con su contraseña {string} en la web app {string}', async function (user: string, pass: string, URL: string)  {

});

// Nav | TS 01
Given('accedo en la pagina {string}', async (URL: string) => {
    await page.goto(URL)

});

When('se realiza clic en todos los enlaces buscados', async () => {
    await page.waitForTimeout(segundos)

});

Then('se muestra el total de enlaces encontrados', async () => {
    await page.waitForTimeout(segundos)
    const enlaces = await links.encontrarEnlacesEnDOM()
    console.log('Enlaces con a encontrados: ' + enlaces.a)
    console.log("Enlaces con src encontrados: ", enlaces.src);
    console.log("Enlaces con href encontrados: ", enlaces.href);
    
});

Then('deben redirigir corretamente a la url de destino', async () => {
    await page.waitForTimeout(segundos)
    
});

Then('deben devolver un codigo de estado HTTP 200 OK', async () => {
    await page.waitForTimeout(segundos)
    links.checkLinksOnPage()
});


Then('deben ser accesible y cargar correctamente', async () => {
    await page.waitForTimeout(segundos)

});

Then('los enlaces debe utilizar el protocolo correcto \\(HTTP o HTTPS)', async () => {
    await page.waitForTimeout(segundos)

});

After( async () => {
    await page.waitForTimeout(segundos)
});
