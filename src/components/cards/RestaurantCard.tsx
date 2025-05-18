import Rating from '@mui/material/Rating';

interface CardProps {
    name: string;
    imageUrl: string;
    rating: number;
    cuisine: string;
}

const RestaurantCard = ({ cuisine, imageUrl, name, rating }: CardProps) => {
    return (
        <div className="card-container">
            <img src={imageUrl} alt="" />
            <div className="flex justify-between items-center card-body">
                <p>Restoranin adi: {name}</p>
                <Rating name="half-rating-read" precision={0.5} value={rating} readOnly />
            </div>
            <p className="rating">Mətbəx növü: {cuisine}</p>
        </div>
    )
}

export default RestaurantCard