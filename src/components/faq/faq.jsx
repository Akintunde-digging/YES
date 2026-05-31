import "./faq.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState, useEffect } from "react";

const faqs = [
        { question: "Who can attend?", answer: "Young professionals, entrepreneurs, students, founders, creatives, executives, and anyone interested in growth, business, and leadership." },
        { question: "Is registration free?", answer: "Registration details and ticket categories will be provided on the registration page." },
        { question: "Can I apply as an exhibitor?", answer: "Yes. Startup and trade fair applications are open." },
        { question: "Can I sponsor the summit?", answer: "Absolutely. Sponsorship opportunities are available for brands and organisations." },
        { question: "Will there be networking opportunities?", answer: "Yes. YES is designed to facilitate intentional networking and collaboration opportunities." },
    ];

function FAQ(){

    
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggle = (i) => {
        setOpenIndexes((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
    }; 

    return(
        <div className="faqSection">
            <div className="faqContents">
                <h1><span className="dash"></span>FAQs</h1>
                <h2>Frequently Asked Questions</h2>
                <div className="faqQuestionsAndAnswer"> {faqs.map((faq, i) => (
                    <div className={`faqItem ${openIndexes.includes(i) ? "open" : ""}`} key={i}>
                        <div className="faqQuestion" onClick={() => toggle(i)}>
                            <h3>{faq.question}</h3>
                            <button className="faqBtn" aria-label="toggle answer">{openIndexes.includes(i) ? <FiMinus /> : <FiPlus />}</button>
                        </div>
                        <div className="faqAnswer">
                            <p>{faq.answer}</p>
                        </div>
                    </div> ))}
                </div>
            </div>
        </div>
    )
}
export default FAQ;