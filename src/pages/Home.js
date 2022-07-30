import React, { useEffect, useState } from "react";

const Home = () => {
    const [homeDetails, setHomeDetails] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc811aafffmsh7cf2c61db109937p1ffcfajsne527db6bea89',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
        .then(response => response.json())
        .then(response => setHomeDetails(response))
        .catch(err => console.error(err));
    return(
        
        <div>
           {homeDetails.map((item) => {
            return (
                <div key={item.id}>

                    <img src={item.image} alt="" />
                    <h6>{item.title}</h6>

                </div>
            )
        })}
        </div>
    )
}

export default Home;