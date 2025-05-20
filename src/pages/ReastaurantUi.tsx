import { useState } from "react"
import RestaurantCard from "../components/cards/RestaurantCard"
import MangalHouse from '../assets/images/mangal-house.jpg'
import BellaVita from '../assets/images/bella-vita.jpg'
import LezzetDoner from '../assets/images/lezzet-doner.jpeg'
import TokyoSushi from '../assets/images/tokyo-sushi.jpg'

const ReastaurantUi = () => {
    const [data, setData] = useState([
        {
            name: "Mangal House",
            imageUrl: `${MangalHouse}`,
            rating: 4.3,
            cuisine: "Türk mətbəxi"
        },
        {
            name: "Bella Vita",
            imageUrl: `${BellaVita}`,
            rating: 4.6,
            cuisine: "İtalyan mətbəxi"
        },
        {
            name: "Tokyo Sushi",
            imageUrl: `${TokyoSushi}`,
            rating: 3.4,
            cuisine: "Yapon mətbəxi"
        },
        {
            name: "Lezzet Döner",
            imageUrl: `${LezzetDoner}`,
            rating: 4.2,
            cuisine: "Türk mətbəxi"
        },
        {
            name: "Mangal House",
            imageUrl: `${MangalHouse}`,
            rating: 4.3,
            cuisine: "Türk mətbəxi"
        },
        {
            name: "Bella Vita",
            imageUrl: `${BellaVita}`,
            rating: 4.6,
            cuisine: "İtalyan mətbəxi"
        }
    ])

    /*Api yoxdur set islenmir deye deployda error verir ona gore*/
    false && setData([])

    const [dataVisibility, setDataVisibility] = useState<number>(3)

    const slicesData = data.slice(0, dataVisibility)

    const loadMore = () => setDataVisibility(dataVisibility + 3)
    const loadLess = () => setDataVisibility(3)

    return (
        <div className="restaurant-section flex flex-col items-center">
            <h2 className="text-center">Reastaurants</h2>
            <div className=" reaturant-body flex justify-center">
                {
                    slicesData.map(item => (
                        <RestaurantCard
                            cuisine={item.cuisine}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
            {slicesData.length < data.length && <button onClick={loadMore} className="show-more">Daha çox göstər</button>}
            {slicesData.length >= data.length && <button onClick={loadLess} className="show-more">Daha az göstər</button>}
        </div>
    )
}

export default ReastaurantUi