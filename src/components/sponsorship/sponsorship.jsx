import "./sponsorship.css";
import { HiCheck } from "react-icons/hi";

function Sponsorship(){
    return(
        <div className="sponsorsSection" id="sponsors">
            <h1><span className="dash"></span>Sponsors</h1>
            <h2>Sponsorship & Partnerships</h2>
            <h3>Partner with one of the most impactful youth-focused entrepreneurship platforms in Africa.</h3>
            <div className="sponsorsOffersAndCategories">
                <div className="sponsorsOffers">
                    <h3>YES offers sponsors:</h3>
                    <span><HiCheck className="sponsorOfferCheck"/>Direct access to ambitious young professionals</span>
                    <span><HiCheck className="sponsorOfferCheck"/>Brand visibility</span>
                    <span><HiCheck className="sponsorOfferCheck"/>Recruitment opportunities</span>
                    <span><HiCheck className="sponsorOfferCheck"/>CSR alignment</span>
                    <span><HiCheck className="sponsorOfferCheck"/>Media exposure</span>
                    <span><HiCheck className="sponsorOfferCheck"/>Market engagement opportunities</span>
                </div>
                <div className="sponsorsCategories">
                    <h3>Sponsorship Categories</h3>
                    <div>
                        <span>Presenting Partner</span>
                        <span>Gold Sponsor</span>
                        <span>Silver Sponsor</span>
                        <span>Media Partner</span>
                        <span>In-Kind Partner</span>
                    </div>
                </div>
            </div>
            <div className="sponsorshipButtons">
                <button className="button1">Request Sponsorship Deck</button>
                <button className="button2">Partner With YES</button>
            </div>
        </div>
    )
}
export default Sponsorship;