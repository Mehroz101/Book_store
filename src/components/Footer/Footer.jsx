import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer_inner">
                <div className="footer_nav">
                    <ul>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="footer_social">
                    <ul>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-facebook-messenger"></i></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>copyright reserved 2024 | Moji</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer