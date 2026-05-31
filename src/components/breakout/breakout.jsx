import "./breakout.css";

function Breakout(){
    return(
        <div className="breaoutSection" id="breakout">
            <h1><span className="dash"></span>Breakout Session</h1>
            <h2>Breakout Session Track</h2>
            <div className="allTracks">
                <div className="eachTracks">
                    <h3>Track A</h3>
                    <p>Financial Literacy & Investment Readiness</p>
                </div>
                <div className="eachTracks">
                    <h3>Track B</h3>
                    <p>CV Revamp & Career Positioning</p>
                </div>
                <div className="eachTracks">
                    <h3>Track C</h3>
                    <p>Mental Health, Relationships & Personal Balance</p>
                </div>
                <div className="eachTracks">
                    <h3>Track D</h3>
                    <p>Negotiation & Relationship Management</p>
                </div>
                <div className="eachTracks">
                    <h3>Track E</h3>
                    <p>Business Model Canvas & Entrepreneurship</p>
                </div>
                <div className="eachTracks">
                    <h3>Track F</h3>
                    <p>Events, Branding & Creative Business</p>
                </div>
            </div>
        </div>
    )
}

export default Breakout;