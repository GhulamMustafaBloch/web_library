import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assats/monogram.png";
    
    const Header = () => {
        const clickBars = () =>{
            const links_sociol_icon =document.querySelector(".links_sociol_icon");
            links_sociol_icon.classList.toggle("active");
        }
        return (
            <>
            <header className="header">
                <div className="logo_links">
                    <div className="logo">
                        <Link to = "/"><img src={Logo} alt="" /></Link>
                    </div>
                </div>
                <div className="links_sociol_icon">
                    <ul className="links">
                        <li>
                            <Link to="/">ہوم</Link>
                        </li>
                        <li>
                            <Link to="/about">تعارف</Link>
                        </li>
                        <li>
                            <Link to="/contact">رابطہ</Link>
                        </li>
                        <li>
                            <Link to="/galry">گیلری</Link>
                        </li>
                    </ul>
                    <div className="inp_sign_in">
                        <div className="sociol_icon">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                        <button className="sign_in">لاگ این</button>
                    </div>
                </div>
                <div onClick={clickBars} className="bars">
                    <i className="fas fa-regular fa-bars"></i>
                </div>
            </header>
            </>
        )
    }
    
    export default Header;
