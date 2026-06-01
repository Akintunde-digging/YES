import "./header.css";
import yesLogo from "../../assets/yes logo.jpg";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            <nav>
                <div className="logoDiv"><img src={yesLogo} alt="" /></div>
                <div className={`listAndButton ${menuOpen ? "open" : ""}`} id="navMenu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#programme">Programme</a></li>
                        <li><a href="#pitch">Pitch</a></li>
                        <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                    <button className="getStartedButton">Register Now</button>
                </div>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <LuX /> : <LuMenu />}</button>
            </nav>
        </header>
    )
}

export default Header;