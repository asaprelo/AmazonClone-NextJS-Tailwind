import {Carousel} from "react-responsive-carousel";

const Banner = () => {
    return <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
        <Carousel showStatus={false} infiniteLoop={true} showThumbs={false} showIndicators={false}>
            <div>
                <img loading={"lazy"} src={"https://m.media-amazon.com/images/I/718B0fDyorL._SX3000_.jpg"}/>
            </div>
            <div>
                <img loading={"lazy"} src={"https://m.media-amazon.com/images/I/61pTUv3D8AL._SX3000_.jpg"}/>
            </div>
            <div>
                <img loading={"lazy"} src={"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/acba829b-af3b-4baf-ba88-738e3e9ad1bd.jpg"}/>
            </div>
        </Carousel>
    </div>
}

export default Banner;
