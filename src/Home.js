import React from 'react'
import Sidebar from './components/Sidebar'
import FoodImage from './Resources/Gourmet_Food.jpg'

function Home() {
    return (
        <div>
            <img src={FoodImage} style={{height: '100%' , width: '100%', display: 'grid'}}/>
            <Sidebar/>
            
        </div>
    )
}

export default Home
