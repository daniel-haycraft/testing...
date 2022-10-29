// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const { Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await (await driver).get('http://localhost:5500/movieList/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await (await driver).quit()
})

test('ya Mum', async() => {
    await driver.findElement(By.xpath('//input')).sendKeys('Empire Stricks Back');
    await driver.findElement(By.xpath('//button')).click();
    const movieOne = await driver.findElement(By.xpath('//li/span[text()="Empire Stricks Back"]'))
    expect(await movieOne.isDisplayed()).toBeTruthy();
    await driver.findElement(By.xpath('//input')).sendKeys('A new Hope');
    await driver.findElement(By.xpath('//button')).click();
    const movieTwo = await driver.findElement(By.xpath('//li/span[text()="A new Hope"]'))
    expect(await movieTwo.isDisplayed()).toBeTruthy();
    await driver.findElement(By.xpath('//input')).sendKeys('Return of the jedi');
    await driver.findElement(By.xpath('//button')).click();
    const movieThree = await driver.findElement(By.xpath('//li/span[text()="Return of the jedi"]'))
    expect(await movieThree.isDisplayed()).toBeTruthy();
    await driver.findElement(By.xpath('//input')).sendKeys('The Force Awakens');
    await driver.findElement(By.xpath('//button')).click();
    const movieFour = await driver.findElement(By.xpath('//li/span[text()="The Force Awakens"]'))
    expect(await movieFour.isDisplayed()).toBeTruthy();
   
    //delete movie
    await driver.findElement(By.xpath('//li/span[text()="The Force Awakens"]'))
    await driver.findElement(By.xpath('//li/button')).click();
    const movieFive = await driver.findElement(By.xpath('//li/span[text()="The Force Awakens"]'))
    expect(await movieFive.isDisplayed()).toBeTruthy();
    //cross off
    await driver.findElement(By.xpath('//span[contains(text(),"A new Hope")]')).click();
    const movieSix = await driver.findElement(By.xpath('//span[contains(text(),"A new Hope")]'))
    expect(await movieSix.isDisplayed()).toBeTruthy();

    // message check
    const movieMessage = await await driver.findElement(By.id('message'))
    expect(await movieMessage.isDisplayed()).toBeTruthy();

    await driver.sleep(7000);
    
})