import "./about.css";

function About(){
    return(
        <div className="aboutSection" id="about">
            <h1><span className="dash"></span>About Yes</h1>
            <p>The Youth Entrepreneurship Summit (YES) is more than an event — it is a platform built to inspire, connect, educate, and empower Africa’s emerging generation of entrepreneurs and professionals.</p>
            <p>Under the theme “Built to Compete,” YES 2026 brings together ambitious young Africans and accomplished industry leaders to explore what it truly takes to build sustainable businesses, navigate career growth, access funding, build influential brands, and compete on a global stage.</p>
            <div className="whether">
                <h2>Whether you are:</h2>
                <ul>
                    <li> <span></span>a startup founder,</li>
                    <li> <span></span>young professional,</li>
                    <li> <span></span>student entrepreneur,</li>
                    <li> <span></span>creative,</li>
                    <li> <span></span>executive,</li>
                    <li> <span></span>freelancer,</li>
                    <li> <span></span>innovator,</li>
                    <li> <span></span>or someone looking to grow,</li>
                </ul>
                <h3>YES is designed for you.</h3>
            </div>
        </div>
    )
}
export default About;