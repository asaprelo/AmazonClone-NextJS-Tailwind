import Product from "./Product";

interface InProduct {
    title : string,
    id: number,
    price: number,
    description : string,
    category : string,
    image: string
}

const Products = ({products}: any) => {
    return (
        <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
            {products.map(({title, id, price, description, category, image}: InProduct) =>
                <Product
                    key={id}
                    title={title}
                    id={id}
                    price={price}
                    description={description}
                    category={category}
                    image={image}/>
            )}
        </div>
    );
}

export default Products;
