import "./details.css";
import { GiMicrophone, GiBookPile, GiTrophy } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";

import hero1 from "../../assets/pexels-safi.webp"
import hero2 from "../../assets/pexels-pavel-danilyuk.webp"
import hero3 from "../../assets/pexels-jibarofoto.webp"
import hero4 from "../../assets/pexels-daniel-samson.webp"
import hero5 from "../../assets/pexels-breakout-session.webp"
import hero6 from "../../assets/pexels-pitch.webp"
import hero7 from "../../assets/pexels-networking.webp"

function Details(){
    return(
        <div className="whatToExpectSection">
            <h1><span className="dash"></span>Details</h1>
            <h2>What to expect.</h2>
            <div className="thingsToExpect">
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero2} alt="" /></div>
                    <h3><GiMicrophone className="eachIcons"/>Keynote sessions</h3>
                    <p>Hear directly from influential business leaders, founders, and executives shaping Africa’s future.</p>   
                </div>
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero1} alt="" /></div>
                    <h3><IoMdPeople className="eachIcons"/>Panel Conversations</h3>
                    <p>Raw and practical discussions around business, leadership, career growth, funding, branding, and scaling globally.</p>
                </div>
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero5} alt="" /></div>
                    <h3><GiBookPile className="eachIcons"/>Breakout Sessions</h3>
                    <p>Interactive sessions covering: Financial Literacy, Investment Readiness, Business Development, CV & LinkedIn Optimisation, Mental Health & Balance, Negotiation Skills, Brand Positioning, Entrepreneurship Foundations, Relationship Management, Events & Creative Business.</p>
                </div>
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero6} alt="" /></div>
                    <h3><GiTrophy className="eachIcons"/>Pitch Competition — Pitch for the Grant</h3>
                    <p>Selected entrepreneurs will pitch their businesses live to a panel of judges for the opportunity to win grants and visibility.</p>
                </div>
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero7} alt="" /></div>
                    <h3><FaHandshakeSimple className="eachIcons"/>Networking Opportunities</h3>
                    <p>Connect with: Founders, Executives, Investors, Recruiters, Sponsors, Collaborators, and fellow ambitous young preofessionals.</p>
                </div>
                <div className="eachThingsToExpect">
                    <div className="eachImgDiv"><img src={hero3} alt="" /></div>
                    <h3><RiShoppingBag3Fill className="eachIcons"/>Startup & Trade Fair Marketplace</h3>
                    <p>Discover and support youth-owned businesses across: Fashion, Technology, Beauty, Food, Creative Industries, Services and Innovation Sectors</p>
                </div>
            </div>
        </div>
    )
}
export default Details;