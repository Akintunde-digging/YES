import "./header.css";
import yesLogo from "../../assets/yes logo.jpg";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            <nav>
                <div className="logoDiv"><a href="#hero"><img src={yesLogo} alt="" /></a></div>
                <div className={`listAndButton ${menuOpen ? "open" : ""}`} id="navMenu">
                    <ul>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#speakers" onClick={() => setMenuOpen(false)}>Speakers</a></li>
                        <li><a href="#programme" onClick={() => setMenuOpen(false)}>Programme</a></li>
                        <li><a href="#pitch" onClick={() => setMenuOpen(false)}>Pitch</a></li>
                        <li><a href="#sponsors" onClick={() => setMenuOpen(false)}>Sponsors</a></li>
                    </ul>
                    <button className="getStartedButton">Register Now</button>
                </div>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <LuX /> : <LuMenu />}</button>
            </nav>
        </header>
    )
}

export default Header;