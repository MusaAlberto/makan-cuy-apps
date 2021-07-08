import API_ENDPOINT from '../globals/api-endpoint'

class restaurantAPISource {
  static async listRestaurants () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default restaurantAPISource
