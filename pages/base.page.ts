import { Page } from '@playwright/test';

export class BasePage {
  url = '';

  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
    await this.verifyCurrentUrl();
    await this.page.waitForSelector('body', { state: 'visible' });
  }
  async waitForPageToLoadUrl(): Promise<void> {
    await this.page.waitForURL(this.url);
    await this.verifyCurrentUrl();
    await this.page.waitForSelector('body', { state: 'visible' });

  }
  async verifyCurrentUrl(): Promise<void> {
    const currentUrl = this.page.url();
    
    if (!currentUrl.includes(this.url)) {
      throw new Error(`Expected URL containing: ${this.url}, Actual URL: ${currentUrl}`);
    }
  }
}