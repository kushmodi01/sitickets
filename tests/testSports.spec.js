import { test } from "../lib/BaseTest.js";
import testData from "../data/testData.json";

test.describe("Test For Demo Form", () => {

  test.beforeEach(async ({ formPage }) => {
    await formPage.visit();
  });

  test("Test For Validates Components", async ({ formPage }) => {
    await formPage.getApplicationUrl(testData.expectedUrl);
    await formPage.getEventTitle(testData.eventTitle);
    await formPage.getEventDate(testData.eventDate);
    await formPage.getEventLocation(testData.eventLocation);
    await formPage.getTicketGroups(testData.ticketGroups);
    await formPage.getEventDescription(testData.eventDescription);
  });
  
});
