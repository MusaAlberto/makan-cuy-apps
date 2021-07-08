import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'
import favoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: favoriteRestaurantIdb,
    restaurant
  })
}

export { createLikeButtonPresenterWithRestaurant }
