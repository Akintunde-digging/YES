import "./whyattend.css";
import { HiCheck } from "react-icons/hi";

function WhyAttendYes(){
    return(
        <div className="whyAttendSection">
            <h1><span className="dash"></span>Why Attend</h1>
            <h2>Why Attend yes?</h2>
            <h3>By attending YES 2026, you will:</h3>
            <div>
                <span><HiCheck className="whyAttendIcons"/>Learn from leading entrepreneurs and executives</span>
                <span><HiCheck className="whyAttendIcons"/>Build meaningful professional connections</span>
                <span><HiCheck className="whyAttendIcons"/>Discover funding and growth opportunities</span>
                <span><HiCheck className="whyAttendIcons"/>Gain practical business and career insights</span>
                <span><HiCheck className="whyAttendIcons"/>Access mentorship and opportunities</span>
                <span><HiCheck className="whyAttendIcons"/>Position yourself for global relevance</span>
            </div>
        </div>
    )
}
export default WhyAttendYes;