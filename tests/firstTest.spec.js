import {test} from "@playwright/test"

test ("Open ITG Website" , async ({page}) => {
    await page.goto("https://itgsoftware.com/")
    console.log("Website Opened Successfully ...! ")

    await page.waitForTimeout(5000)
}) 