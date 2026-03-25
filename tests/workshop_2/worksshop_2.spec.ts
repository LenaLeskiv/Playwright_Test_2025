import {expect, test} from '@playwright/test';

test('Automation Form Submissions', async ({page}) =>{

    await page.goto('https://demo.playwright.dev/todomvc');
const newTodo = await page.getByPlaceholder('What needs to be done?');
await newTodo.fill('John Doe');
await newTodo.press('Enter');
await newTodo.fill('JJ Doe');
await newTodo.press('Enter');
await page.waitForTimeout(2000);

const firstTodo = await page.getByTestId('todo-item').nth(0);
await expect(firstTodo).not.toHaveClass('completed');
await firstTodo.getByRole('checkbox').check();
await expect(firstTodo).toHaveClass('completed');

await page.waitForTimeout(1000);

const secondTodo = await page.getByTestId('todo-item').nth(1);
await expect(secondTodo).not.toHaveClass('completed');
await secondTodo.getByRole('checkbox').check();
await expect(secondTodo).toHaveClass('completed');

await page.waitForTimeout(1000);

})

test('Handling Form', async ({page}) => {

    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder = "What needs to be done?"]';
    await page.fill(placeholder, 'Victoria Beckham');
    await page.press(placeholder, 'Enter');

    
    const checkbox = await page.locator('.toggle');
    await checkbox.check();
    await page.waitForTimeout(2000);
})