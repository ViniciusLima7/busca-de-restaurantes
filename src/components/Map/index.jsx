import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useEffect, useState } from 'react';

import { setRestaurants } from '../../redux/modules/restaurants'
export const MapContainer = (props) => {

    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants);
    const [map, setMap] = useState(null);
    const { google, query } = props;


    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);


    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('restaurants>>>>', results);
                dispatch(setRestaurants(results));

                // Apagar Else
            } else {
                console.log('deu ruim no texto')
            }
        });
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('restaurants>>>>', results);
                dispatch(setRestaurants(results));

                // Apagar Else
            } else {
                console.log('deu ruim no mapa')
            }
        });
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center)
    }

    return (
        <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}>
            {restaurants.map((restaurant => (
                <Marker
                    key={restaurant.place_id}
                    name={restaurant.name}
                    position={{
                        lat: restaurant.geometry.location.lat(),
                        lng: restaurant.geometry.location.lng(),
                    }}
                />
            )))}
        </Map>

    );

};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);