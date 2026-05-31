import "./pitch.css";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { HiTrophy } from "react-icons/hi2";
function Pitch(){
    return(
        <div className="pitchSection" id="pitch">
            <h1><span className="dash"></span>Pitch Competition</h1>
            <h2>Pitch for the Grant</h2>
            <h3>Are you building a business or startup with growth potential?</h3>

            <div className="pitchMiddle">
                <div className="pitchLeft">
                    <p className="pitchColLabel">Apply and stand a chance to:</p>
                    <div className="pitchList">
                        <div className="pitchItem"><HiArrowRight className="pitchArrow"/>Win business grants</div>
                        <div className="pitchItem"><HiArrowRight className="pitchArrow"/>Gain visibility</div>
                        <div className="pitchItem"><HiArrowRight className="pitchArrow"/>Meet investors</div>
                        <div className="pitchItem"><HiArrowRight className="pitchArrow"/>Receive mentorship opportunities</div>
                        <div className="pitchItem"><HiArrowRight className="pitchArrow"/>Pitch before business leaders and sponsors</div>
                    </div>
                </div>

                <div className="pitchRight">
                    <div className="pitchCard">
                        <p className="pitchColLabel">Eligibility</p>
                        <div className="pitchList">
                            <div className="pitchItem"><HiCheck className="pitchCheck"/>Ages 18–35</div>
                            <div className="pitchItem"><HiCheck className="pitchCheck"/>Early-stage founders or businesses under 5 years old</div>
                        </div>
                    </div>

                    <div className="pitchCard">
                        <p className="pitchColLabel">Top winners receive</p>
                        <div className="pitchList">
                            <div className="pitchItem"><HiTrophy className="pitchTrophy"/>Cash grants</div>
                            <div className="pitchItem"><HiTrophy className="pitchTrophy"/>Recognition</div>
                            <div className="pitchItem"><HiTrophy className="pitchTrophy"/>Mentorship opportunities</div>
                            <div className="pitchItem"><HiTrophy className="pitchTrophy"/>Brand exposure</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pitch;