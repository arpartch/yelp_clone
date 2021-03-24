import React from 'react'
import AddRestaurants from '../components/AddRestaurants'
import Header from '../components/Header'
import RestaurantsList from '../components/RestaurantsList'

const home = () => {
    return (
        <div>
            <Header/>
            <AddRestaurants/>
            <RestaurantsList/>
        </div>
    )
}

export default home
