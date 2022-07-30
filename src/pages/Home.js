import React, { useEffect, useState } from "react";

const Home = () => {
    const [homeDetails, setHomeDetails] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc811aafffmsh7cf2c61db109937p1ffcfajsne527db6bea89',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    fetch('https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
        return(
            <div>
                {setHomeDetails.map((item) => {
                    return(
                        <div>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
}

export default Home;