import type { NextPage } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home: NextPage = ({products} : any) => {
  return <>
      <Header/>
      <div className="bg-gray-100">
          <main className="mx-auto">
              <Banner/>
              <Products products = {products}/>
          </main>
      </div>
    </>
}

export async function getServerSideProps () {
    const products = await fetch('https://fakestoreapi.com/products').then(res => res.json())

    return {
        props : {
            products
        }
    }
}

export default Home
