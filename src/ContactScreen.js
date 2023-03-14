import './ContactScreen.css';
import { Link } from 'react-router-dom';

const ContactScreen = () => {
    return (
        <div id="contact-screen">
            <div id="cards">
                <div className="card">
                    <button className="card-content"  onClick="openFeedbackModal">Send Feedback</button>
                </div>

                <div className="card">
                    <button className="card-content" onClick="openReportModal">Report Issue</button>
                </div>

                <div className="card">
                    <button className="card-content" onClick="openApplyModal">Apply To Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen