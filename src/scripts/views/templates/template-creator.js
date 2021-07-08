import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = restaurant => `
    <article class="card-item">
        <img class="card-item-thumbnail lazyload"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name}">
        <div class="card-item-content">
            <p class="card-item-location">Location : ${restaurant.city}</p>
            <p class="card-item-rating">⭐ ${restaurant.rating}</p>
            <h1 class="card-item-title">
                <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            </h1>
            <p class="card-item-description">${restaurant.description}</p>
        </div>
    </article>
`

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant-title">${restaurant.name}</h2>
    <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div style="padding: 10px;">
        ${restaurant.categories.map(category => `<p class="category">#${category.name}</p>`).join(' ')}
        <p class="rating-detail">⭐ ${restaurant.rating}</p>
        <p class="location-detail">Location : ${restaurant.address}, ${restaurant.city}</p>
        <p class="description-detail">${restaurant.description}</p>

        <div class="restaurant-menu">
            <div class="foods-menu">
                <h4>Makanan</h4>
                ${restaurant.menus.foods.map(food => `<p>- ${food.name}</p>`).join('')}
            </div>
            <div class="drinks-menu">
                <h4>Minuman</h4>
                ${restaurant.menus.drinks.map(drink => `<p>- ${drink.name}</p>`).join('')}
            </div>
        </div>
        
        <h3 class="restaurant-review">Ulasan Pelanggan</h3>
        <div class="review-card">
            ${restaurant.customerReviews.map(review => `
                    <div class="review-card-item">
                        <p class="name">${review.name}</p>
                        <p class="review">${review.review}</p>
                        <small><i>${review.date}</i></small>
                    </div>
                `
            )
            .join('')}
        </div>
    </div>
`

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
