import React from 'react'
import { Restaurant, RestaurantAddress, RestaurantInfo, RestaurantPhoto, RestaurantTitle } from './styles';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';

const RetaurantCard = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>Nome do Restaurante</RestaurantTitle>
                <ReactStars count={5} isHalf={true} value={4} edit={false} activeColor="#e7711c"></ReactStars>
                <RestaurantAddress>Rua Rio Vermelho, 13</RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
        </Restaurant>
    );
}

export default RetaurantCard;