import "./herosection.css";

function HeroSection(){
    return(
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
    )
}
export default HeroSection;