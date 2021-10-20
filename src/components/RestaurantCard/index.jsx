import React from 'react'
import { Restaurant, RestaurantAddress, RestaurantInfo, RestaurantPhoto, RestaurantTitle } from './styles';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';

const RetaurantCard = ({ restaurant }) => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                <ReactStars count={5} isHalf={true} value={restaurant.rating} edit={false} activeColor="#e7711c"></ReactStars>
                <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="Foto do Restaurante" />
        </Restaurant>
    );
}

export default RetaurantCard;