import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
const ProductDetail = () => {
    const [singleProduct, setSingleProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        getProductDetails()
    }, [])
    const getProductDetails = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleProduct(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <>
            <Header />
            {loading ? <Loader /> :
                <>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Carousel>
                                    {
                                        singleProduct?.images.map((e) => (
                                            <Carousel.Item>
                                                <img height={500} width={"100%"} src={e} alt="" />
                                            </Carousel.Item>
                                        ))
                                    }
                                </Carousel>
                            </div>
                            <div className='col-md-6'>
                                <div style={{ marginTop: 100 }} className='border p-2'>
                                    <div className='d-flex justify-content-center'>
                                        <img width={"30%"} src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />

                                    </div>
                                    <div className='d-flex justify-content-center flex-column align-items-center'>
                                        <h1>{singleProduct?.title}</h1>
                                    </div>
                                    <button style={{ backgroundColor: "#1F1F1F", color: 'white', border: "none" }} className='btn p-3 d-block w-100'>Show Phone Number</button>
                                    <button style={{ backgroundColor: "white", border: "none" }} className='border btn p-3 w-100 mt-4'>Chat</button>
                                </div>

                                <div className='border p-2 mt-5'>
                                    <h1>Location</h1>
                                    <p>Gulistan Colony, Rawalpindi</p>
                                </div>
                            </div>
                        </div>
                        <div className='border  p-3 mt-5'>
                            <h1>RS. {singleProduct?.price}</h1>
                            <h4>{singleProduct?.description}</h4>
                            <p>Ratings: {singleProduct?.rating}</p>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}

export default ProductDetail