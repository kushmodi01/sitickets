import { expect } from "@playwright/test";

export class FormPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.expectedUrl = page.locator("")
    this.eventTitle = page.locator("//h2[@type='heading2']//div")
    this.eventDate = page.locator("//p[@type='bodySmall']")
    this.ticketGroups = page.locator("//div[contains(@class,'styles__TicketList')]//div[contains(@class,'Ticket-sc')]")
    this.eventDescription = page.locator("//div[contains(@class,'EventDescriptionContainer')]//p")
  }

  async visit() {
    await this.page.goto('');
  }

  async getApplicationUrl(expectedUrl) {
    const currentUrl = this.page.url();
    console.log(`Current application URL: ${currentUrl}`);
    expect(currentUrl).toBe(expectedUrl);
  }

  async getEventTitle(text) {
    await this.page.waitForSelector("//h2[@type='heading2']//div", { state: 'visible' });
    await expect(this.eventTitle).toBeVisible();
    expect(await this.eventTitle.textContent()).toEqual(text);
  }

  async getEventDate(text) {
    await expect(this.eventDate).toBeVisible();
    expect(await this.eventDate.textContent()).toContain(text);
  }

  async getEventLocation(text) {
    await expect(this.eventDate).toBeVisible();
    expect(await this.eventDate.textContent()).toContain(text);
  }

  async getTicketGroups(int) {
    const count = await this.ticketGroups.count();
    expect(count).toBe(int);
  }

  async getEventDescription(text) {
    expect(await this.eventDescription.textContent()).toContain(text);
  }

}
