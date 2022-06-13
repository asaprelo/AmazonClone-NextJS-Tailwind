import Image from "next/image";
import {StarIcon} from "@heroicons/react/outline";
import {useState} from "react";

interface InProduct {
    title : string,
    id: number,
    price: number,
    description : string,
    category : string,
    image: string
}

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({title, id, price, description, category, image} : InProduct) => {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} objectFit={"contain"} height={"200"} width={"200"}/>
            <h4>{title}</h4>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Aggiungi al carrello</button>
            {
                /*
                <div className="flex">
                {Array(rating).fill('').map((_,i) => (
                    <StarIcon key= {i} className="h-5"/>
                ))}
            </div>
                 */
            }
        </div>
    );
}

export default Product;
