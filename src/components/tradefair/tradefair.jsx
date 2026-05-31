import "./tradefair.css";
import { HiArrowRight } from "react-icons/hi";
import { RiTShirt2Line, RiPaletteLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiBowlFood } from "react-icons/pi";
import { LuLaptopMinimal, LuHeart } from "react-icons/lu";
import { BsBrush } from "react-icons/bs";
import { FiTv } from "react-icons/fi";
function TradeFair(){
    return(
        <div className="tradeFairSection" id="tradefair">
            <h1><span className="dash"></span>Trade Fair</h1>
            <h2>Trade Fair & Startup Marketplace</h2>
            <h3>Showcase your business at YES 2026.</h3>
            <div className="provisionsAndCategories">
                <div className="provisions">
                    <h3>The YES Marketplace provides youth-owned businesses with direct access to:</h3>
                    <span><HiArrowRight className="provisionArrow"/>Customers</span>
                    <span><HiArrowRight className="provisionArrow"/>Investors</span>
                    <span><HiArrowRight className="provisionArrow"/>Partners</span>
                    <span><HiArrowRight className="provisionArrow"/>Sponsors</span>
                    <span><HiArrowRight className="provisionArrow"/>High-value networking opportunities.</span>
                </div>
                <div className="categories">
                    <h3>Categories</h3>
                    <div>
                        <span><RiTShirt2Line className="categoriesIcon"/>Fashion</span>
                        <span><HiOutlineSparkles className="categoriesIcon"/>Beauty</span>
                        <span><PiBowlFood className="categoriesIcon"/>Food</span>
                        <span><LuLaptopMinimal className="categoriesIcon"/>Technology</span>
                        <span><BsBrush className="categoriesIcon"/>Creative services</span>
                        <span><LuHeart className="categoriesIcon"/>Lifestyle</span>
                        <span><FiTv className="categoriesIcon"/>Media</span>
                        <span><RiPaletteLine className="categoriesIcon"/>Art & Design</span>
                    </div>
                </div>
            </div>
            <div className="exhibitorButton"><button>Become an Exhibitor</button></div>
        </div>
    )
}
export default TradeFair;