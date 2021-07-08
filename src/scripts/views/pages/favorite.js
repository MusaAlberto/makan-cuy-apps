/* eslint-disable array-callback-return */
import favoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
            <section class="content">
                <div id="list-restaurants" class="card"></div>
            </section>
        `
  },
  async afterRender () {
    const restaurants = await favoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#list-restaurants')
    restaurants.map(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
