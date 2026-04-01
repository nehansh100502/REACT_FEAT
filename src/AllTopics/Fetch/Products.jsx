import { useEffect, useState } from 'react'
import { product } from './product.jsx'

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    async function getProducts() {
        try {
            const resp = await fetch("https://dummyjson.com/products")
            const data = await resp.json()
            console.log(data.products)
            setAllProducts(data.products)
        }
        catch (error) {
            console.log(err.response)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
}

return (
    <>
        <div>All Products</div>
        {allProducts.length === 0 ? (<>
            <p>No product Available</p>
        </>) : (<>
            <section>
                {allProducts.map((ele) => {
                    return (
                        <Product ele={ele} key={ele.id} />
                    )
                })}
            </section>
        </>)}
    </>
)
export default Products;