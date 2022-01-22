describe('foo', () => {
  beforeEach(async () => {
    await page.goto(PATH, { waitUntil: 'load' })
    await page.screenshot({ path: `./tmp/puppeteer/screenshot-${new Date().toISOString()}.png` })
  })

  test('should return bar', async () => {
    const foo = await page.evaluate(() => {
      console.log('foo')
      return foo.default()
    })
    expect(foo).toBe('bar')
  })
})
