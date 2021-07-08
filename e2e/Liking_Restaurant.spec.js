const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('liking one restaurant', async ({ I }) => {
//   I.see('Tidak ada film untuk ditampilkan', '.card-item')
  const nothingFavorite = await I.grabNumberOfVisibleElements('.card-item')

  assert.strictEqual(nothingFavorite, 0)

  I.amOnPage('/')

  I.seeElement('.card-item-title a')

  const firstRestaurant = locate('.card-item-title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card-item')
  const likedRestaurantTitle = await I.grabTextFrom('.card-item-title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('unliking one restaurant', async ({ I }) => {
  const nothingFavorite = await I.grabNumberOfVisibleElements('.card-item')

  assert.strictEqual(nothingFavorite, 0)

  I.amOnPage('/')

  I.seeElement('.card-item-title a')

  const firstRestaurant = locate('.card-item-title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card-item')
  const likedRestaurantTitle = await I.grabTextFrom('.card-item-title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  I.click(likedRestaurantTitle)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  assert.strictEqual(nothingFavorite, 0)
})
