import React from 'react'

const Header = () => {
    return (
        <>
            {/* <!-- First navbar Starts here --> */}
            {/* <!-- For Top Button --> */}
            <p id="backToTop"></p>
            {/* <!-- For Top Button --> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container">
                    <a className="navbar-brand bg-primary p-2 rounded res" href="#">OLX</a>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i
                                    className="bg p-2 rounded-pill fa-solid fa-car"></i>&nbsp;&nbsp; HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><i
                                    className="bg p-2 rounded-pill  fa-solid fa-building"></i>&nbsp;&nbsp; PROPERTY</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- First navbar ends here --> */}
            {/* <!-- Second navbar Starts here --> */}
            <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
                <div className="container mt-3">
                    <a className="fs-1 text-decoration-none me-3 fw" href="#">OLX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="border px-5 rounded nav-link active dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-magnifying-glass"></i>
                                    Pakistan
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Pakistan</a></li>
                                    <li><a className="dropdown-item" href="#">Karachi</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Lahore</a></li>
                                </ul>
                            </li>
                        </ul>
                        <input type="text" className="border p-3 w-50" placeholder="Find cars,mobiles and much more" name="" id=""/>
                            <button type="button" className="btn btn-link text-dark">Link</button>
                            <button type="button" className="btn btn-info">Info</button>
                    </div>
                </div>
            </nav>
            {/* <!-- Second navbar Ends here --> */}
            {/* <!-- Third navbar Stars here --> */}
            <nav className="navbar navbar-expand-lg bg-white border-bottom">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active fw-bold" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    ALL CATEGORIES
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
                                    <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
                                    <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Mobile Phones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Cars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Motorcycles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Houses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">TV-Video-Audio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Tablets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Land & Plots</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Third navbar Ends here --> */}
        </>
    )
}

export default Header