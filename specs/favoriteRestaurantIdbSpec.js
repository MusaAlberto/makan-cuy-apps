import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import favoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await favoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(favoriteRestaurantIdb)
})
