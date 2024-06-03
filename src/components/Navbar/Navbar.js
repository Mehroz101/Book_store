import React,{useState} from 'react'
import "./Navbar.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const [navSticky,setNavSticky] = useState(false);
    const [popupShow,setPopupShow] = useState(false);
    const togglepopup = () =>{
        setPopupShow(!popupShow)
    }
    // console.log(popupShow)
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 0)
            setNavSticky(true);
        else{
            setNavSticky(false)
        }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[]) ; 
   
  return (
    <>
    <nav className={`${navSticky ? "navSticky" : ""}`}>
        <div className="navbar">
            <div className="nav_left">
                <h2>BookStore</h2>
            </div>
            <div className='nav_rights'>
            <div className={`nav_right ${showMenu ? 'show' : ''}`}>
                <div className="navitems">
                    <ul>
                        <li  onClick={()=>setShowMenu(!showMenu)}>
                           <Link to="/">
                           Home
                           </Link> 
                        </li>
                        <li  onClick={()=>setShowMenu(!showMenu)}>
                        <Link to="/course">
                           Course
                           </Link>
                        </li>
                        <li  onClick={()=>setShowMenu(!showMenu)}>
                            Contact
                        </li>
                        <li  onClick={()=>setShowMenu(!showMenu)}>
                            About
                        </li>

                    </ul>
                    <div className="input">
                        <input type="text" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="signin_btn">
                    <button onClick={togglepopup} >sign in</button>
                </div>
            </div>
            </div>
           
                <div className="nav_bars" onClick={()=>{setShowMenu(!showMenu)}}><i className="fa-solid fa-bars"></i></div>
        </div>
    </nav>
    <Popup state={popupShow} stateFun = {setPopupShow}/>
    </>
  )
}

export default Navbar