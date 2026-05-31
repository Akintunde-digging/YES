import "./header.css";
import yesLogo from "../../assets/yes logo.jpg";

function Header(){
    return(
        <header>
            <nav>
                <div className="logoDiv"><img src={yesLogo} alt="" /></div>
                <div className="listAndButton" id="navMenu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#programme">Programme</a></li>
                        <li><a href="#pitch">Pitch</a></li>
                        <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                    <button className="getStartedButton">Register Now</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;