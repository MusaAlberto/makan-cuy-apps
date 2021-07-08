/* eslint-disable array-callback-return */
import restaurantAPISource from '../../data/restaurantapi-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
            <section class="content">
                <div id="list-restaurants" class="card"></div>
            </section>
        `
  },
  async afterRender () {
    const restaurants = await restaurantAPISource.listRestaurants()
    const restaurantsContainer = document.querySelector('#list-restaurants')
    restaurants.map(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
    // console.log(restaurants)
  }
}

export default Home
