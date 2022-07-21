import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProductCard from '../components/UI/productCard/ProductCard'
import { products } from '../data'

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [pageNumber, setPageNumber] = useState(0)

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return item;
    })

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [displayPage])

    return (
        <section className='section'>
            <div className='container mx-auto text-center mt-20'>
                <h2 className='text-5xl font-primary font-extrabold mb-8'>
                    All Products
                </h2>
                <input type="text" placeholder="I'm looking for..." className='form-control'
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <div className='lg:grid lg:grid-cols-4 lg:gap-x-[30px] ml-1 mr-1 mt-10'>
                    {displayPage.map((item) => (
                        <div key={item.id}>
                            <ProductCard item={item} />
                        </div>
                    ))}
                </div>
                <div>
                    {pageCount ? (
                        <ReactPaginate pageCount={pageCount} onPageChange={changePage}
                            previousLabel={"Prev"} nextLabel={"Next"} className='pagination-link' />
                    ) : (
                        <h2 className='font-primary font-bold text-2xl min-h-screen'>
                            Product not found
                        </h2>
                    )

                    }
                </div>
            </div>
        </section>
    )
}

export default AllProducts