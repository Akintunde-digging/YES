import { useEffect, useState } from "react";
import "./herosection.css";

import hero1 from "../../assets/pexels-safi.webp"
import hero2 from "../../assets/pexels-pavel-danilyuk.webp"
import hero3 from "../../assets/pexels-jibarofoto.webp"
import hero4 from "../../assets/pexels-daniel-samson.webp"
import hero3mobile from "../../assets/pexels-jibarofoto-mobile.jpg"
import hero4mobile from "../../assets/pexels-daniel-samson-mobile.jpg"

function HeroSection(){

    const desktopHero  = [hero3, hero4];
    const mobileHero = [hero3mobile, hero4mobile]
    const [currentImage, setCurrentImage] = useState(0);
    const image =
  window.innerWidth <= 480
    ? mobileHero
    : desktopHero;
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % image.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [image.length]);

    return(
        
        <div className="heroBg" style={{ backgroundImage: `url(${image[currentImage]})`}}>
            <div className="heroSection" id="hero">
                <div className="h1sAndPs">
                    <h1>Youth Enterpreneurship <span className="summitSpan">Summit</span> (YES) <span className="yearSpan">2026</span>.</h1>
                    <h2>Built To Compete.</h2>
                    <h3>Empowering Africa’s Next Generation of Builders, Innovators & Leaders</h3>
                    <p className="p1 ">The Youth Entrepreneurship Summit (YES) is a high-impact gathering designed to equip ambitious young professionals and entrepreneurs with the tools, networks, insights, and opportunities needed to compete globally.</p>
                    <p className="p2">Join founders, executives, investors, creatives, and industry leaders for a full day of transformational conversations, practical workshops, networking, business opportunities, and funding access.</p>
                </div>
                <div className="locationAndTime">
                    <div className="eachLocationAndTime">
                        <span>Location</span>
                        <p>Triune Centre, Victoria Island, Lagos</p>
                    </div>
                    <div className="eachLocationAndTime">
                        <span>Date</span>
                        <p>Saturday, July 4, 2026</p>
                    </div>
                    <div className="eachLocationAndTime">
                        <span>Time</span>
                        <p>10:00 AM – 5:00 PM</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="registerButton">Register Now</button>
                    <button className="others">Become a Sponsor</button>
                    <button className="others">Apply to Pitch</button>
                    <button className="others">Exhibit at YES</button>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;