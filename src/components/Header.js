import React from 'react'
import logo from '../images/common/logo.png'
import wishlist from '../images/common/wishlist.svg'
import profile from '../images/common/profile.svg'
import '../style/common.css'

function Header() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#"
            ><img
                    className="logo"
                    src={logo}
                    alt="Khoomi Logo"
                /></a>
            <div className="navbar-left">
                <a className="nav-item active" href="#">Home</a>
                <a className="nav-item" href="#">New Arrivals</a>
                <a className="nav-item" href="#">Trending</a>
                <a className="nav-item" href="#">Deals For You</a>
                <a className="nav-item" href="#">Discounts</a>
                <a className="nav-item" href="#">Weekly Offers</a>
            </div>
            <div className="right-items">
                <button>
                    <img
                        className="nav-image"
                        src={wishlist}
                        height="30px"
                        width="30px"
                        alt=""
                    />
                </button>
                <button>
                    <img
                        className="nav-image"
                        src={profile}
                        height="30px"
                        width="30px"
                        alt=""
                    />
                </button>
            </div>
        </nav>
    )
}

export default Header