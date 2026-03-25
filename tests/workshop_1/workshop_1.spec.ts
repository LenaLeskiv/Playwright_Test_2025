import {test} from '@playwright/test';

test.skip('Basic Navigation', async ({page})=>{
    await page.goto('https://github.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})


test.skip('Interaction with Web Elements on GitHub', async ({page})=>{
    await page.goto('https://github.com/');
    //await page.locator('//a[contains(@class, "HeaderMenu-link--sign-in")]').click();
    //this method can be used without xpath locator - playwright has getBuRole method
    await page.getByRole('link', {name: 'Sign in'}).click();

    await page.waitForTimeout(2000);
    await clearUsernameFunction();

    async function clearUsernameFunction() {
        await page.locator('#login_field').clear();
        await page.locator('#login_field').fill('LenaLeskiv');
    }
  
    /*await clearPasswordFunction();

    async function clearPasswordFunction() {
        await page.locator('#password').clear();
        await page.locator('#password').fill('');
    }*/
    
   

    await page.locator('//input[contains(@class, "btn")]').click();

    await page.waitForTimeout(2000);
})