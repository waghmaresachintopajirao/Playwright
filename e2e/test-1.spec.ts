import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quickjoiners.com/');
  await expect(page.getByText('Share your availability Stand')).toBeVisible();
  await page.getByRole('heading', { name: 'Early Bird Catch the Job' }).click();
  await page.getByRole('button', { name: 'Search Jobs' }).click();
  await expect(page.getByRole('navigation')).toContainText('Blog');
  await page.getByRole('link', { name: 'Jobs', exact: true }).click();
  await expect(page.getByRole('navigation')).toContainText('Jobs');
  await page.getByRole('heading', { name: 'Find Jobs' }).click();
  await expect(page.getByRole('textbox', { name: 'Job title, keywords, skills,' })).toBeEmpty();

});