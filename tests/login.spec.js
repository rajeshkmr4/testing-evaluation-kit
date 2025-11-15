import { test, expect } from '@playwright/test';

test('Valid Login and Logout Test', async ({ page }) => {

  console.log("🔍 Starting Login Test...");

  await page.goto('https://jithya.sandboxtrial.com/login');
  await page.getByPlaceholder('Email Address').fill('dentalclinic@gmail.com');
  await page.getByPlaceholder('Password').fill('demo@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveURL('https://jithya.sandboxtrial.com/dashboard');
  console.log("✅ Login Successful!");
  const username = page.locator('#cname');
  await expect(username).toHaveText('dentalclinic@gmail.com');
  await expect(page.locator('div.schapp-container')).toBeVisible();
  await expect(page.locator('div#wrapper')).toBeVisible();
  await expect(page.locator('div.patient-status')).toBeVisible();
  console.log("📌 Dashboard Loaded Successfully!");
  await page.locator('#logout').click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page).toHaveURL(/\/login/);
  console.log("🚪 Logout Successful!");
});
