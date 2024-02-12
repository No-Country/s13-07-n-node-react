// login-page.ts
import { Page } from 'playwright';
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

}
