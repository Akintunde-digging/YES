import "./footer.css";
import yesLogo from "../../assets/yes logo.jpg";
import { RiInstagramFill, RiLinkedinFill, RiTwitterXFill, RiTiktokLine } from "react-icons/ri";

function Footer(){
    return(
        <div className="footerSection">
            <div className="beforeBorder">
                <div className="logoToSocials">
                    <div className="footerLogoDiv"><img src={yesLogo} alt="" /></div>
                    <p>YES 2026. Built to Compete. Empowering Africa’s Next Generation of Builders, Innovators & Leaders</p>
                    <div className="socials">
                        <a href=""><RiInstagramFill className="socialsIcon"/></a>
                        <a href=""><RiLinkedinFill className="socialsIcon"/></a>
                        <a href=""><RiTwitterXFill className="socialsIcon"/></a>
                        <a href=""><RiTiktokLine className="socialsIcon"/></a>
                    </div>
                </div>
                <div className="eventDetails">
                    <h3>Event Details</h3>
                    <ul>
                        <li><span>Date:</span> Saturday, July 4, 2026</li>
                        <li><span>Venue:</span>Triune Centre, Trinity Avenue by Water Corporation Road, Victoria Island, Lagos</li>
                        <li><span>Time:</span>10:00 AM – 5:00 PM</li>
                        <li><span>Email: </span><a href="mailto:yesummitafrica@gmail.com">yesummitafrica@gmail.com</a></li>
                    </ul>
                </div>
                <div className="quickLinks">
                    <h3> Quick Links</h3>
                    <ul>
                        <li><a href="#about">About YES</a></li>
                        <li><a href="">Register Now</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#programme">Schedule</a></li>
                        <li><a href="#breakout">Breakout Session</a></li>
                        <li><a href="#pitch">Pitch Competition</a></li>
                        <li><a href="#tradefair">Tradefair</a></li>
                        <li><a href="#sponsors">Become a Sponsor</a></li>
                    </ul>
                </div>
            </div>
            <div className="border"></div>
            <div className="afterBorder">
                <p>© 2026 Youth Enterpreneurship Summit. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;