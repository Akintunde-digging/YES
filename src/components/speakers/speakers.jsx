import "./speakers.css";
import yes9 from "../../assets/YES 9.webp";
import yes3 from "../../assets/YES 3.webp";
import yes6 from "../../assets/YES 6.webp";
import yes4 from "../../assets/YES 4.webp";
import yes8 from "../../assets/YES 8.webp";
import yes7 from "../../assets/YES 7.webp";
import yes5 from "../../assets/YES 5.webp";
import yes2 from "../../assets/YES 2.webp";

function Speakers(){
    return(
        <div className="speakersSection" id="speakers">
            <h1><span className="dash"></span>Speakers</h1>
            <h2>Featured Speakers.</h2>
            <h3>Guest Speakers & Industry Leaders.</h3>
            <div className="allSpeakers">
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes9} alt="" /></div>
                    <div className="eachText">
                        <h4>Dr. Nurudeen Abubakar Zauro</h4>
                        <p>Technical Adviser to the President on: </p>
                        <span>Economic and Financial Inclusion</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes3} alt="" /></div>
                    <div className="eachText">
                        <h4>Mr. Tola Adekunle-Johnson</h4>
                        <p>Senior Special Assistant to the President on: </p>
                        <span>Job Creation & MSMEs</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes6} alt="" /></div>
                    <div className="eachText">
                        <h4>Ola Williams</h4>
                        <p>Country Manager</p>
                        <span>Microsoft Nigeria</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes4} alt="" /></div>
                    <div className="eachText">
                        <h4>Tosin Eniolorunda</h4>
                        <p>CEO</p>
                        <span>Moniepoint</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes8} alt="" /></div>
                    <div className="eachText">
                        <h4>Daniel Awe</h4>
                        <p>Managing Director</p>
                        <span>Africa Fintech Foundry</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes7} alt="" /></div>
                    <div className="eachText">
                        <h4>Ify Koko</h4>
                        <p>Country Manager</p>
                        <span>Hewlett Packard Enterprise Nigeria</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes5} alt="" /></div>
                    <div className="eachText">
                        <h4>Olugbenga Agboola</h4>
                        <p>Founder & CEO</p>
                        <span>Flutterwave</span>
                    </div>
                </div>
                <div className="eachSpeakers">
                    <div className="imgDiv"><img src={yes2} alt="" /></div>
                    <div className="eachText">
                        <h4>Feyisayo Alayande</h4>
                        <p>Executive Secretary</p>
                        <span>Lagos State Employment Trust Fund</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;