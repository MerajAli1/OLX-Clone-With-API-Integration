import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"

const Home = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://dummyjson.com/products")
            setProducts(response.data.products)
            setLoading(false)
        } catch (error) {
            setLoading(true)
            console.log(error)
            setLoading(false)
        }
    }
    console.log(products)
    return (
        <>
            <Header />
            {loading ? <Loader /> :
                <>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="fs-2 mt-5">Fresh recommendations</p>
                            </div>
                        </div>

                        <div className="row">
                            {
                                products?.map((e) => {
                                    return (
                                        <div onClick={() => navigate(`/productdetail/${e.id}`)} key={e.id} className="col-md-3 mb-5">
                                            <div className="shadow customBorder rounded  p-1">
                                                <span className="badge bg-warning mb-2 posi">FEATURED</span>
                                                <img style={{ height: "200px" }} width="100%" className="border shadow"
                                                    src={e.thumbnail} alt="" />
                                                <p className="ms-2 mt-2 fs-5 fw-bold">Rs. {e.price}</p>
                                                <p className="ms-2 fs-4 mt-3">{e.title}</p>
                                                <p className="ms-2 mt-4 text-secondary">RATING: {e.rating}</p>
                                                <button className="btn btn-outline-danger mb-3">Buy Now</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}

export default Home