import './ContactScreen.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FeedbackModal from './FeedbackModal';
import ReportModal from './ReportModal';
import './Modal.css';

const ContactScreen = () => {
    const [showFeedbackModal, setFeedbackShow] = useState(false);
    const [showReportModal, setReportShow] = useState(false);
    const [showApplicationModal, setApplicationShow] = useState(false);

    const openFeedbackModal = () => setFeedbackShow(true);
    const closeFeedbackModal = () => setFeedbackShow(false);

    const openReportModal = () => setReportShow(true);
    const closeReportModal = () => setReportShow(false);

    const openApplicationModal = () => setApplicationShow(true);
    const closeApplicationModal = () => setApplicationShow(false);

    return (
        <>
            <div id="contact-screen">
                <div id="cards">
                    <div className="card-body" onClick={openFeedbackModal}>
                        <div className="card-content">
                            <h3 className="card-title">Send Feedback</h3>
                            <h5 className="card-subtitle">Tell us your Experience</h5>
                        </div>  
                    </div>

                    <div className="card-body" onClick={openReportModal}>
                        <div className="card-content">
                            <h3 className="card-title">Report Issue</h3>
                            <h5 className="card-subtitle">Have any problem with the app? Come tell us!</h5>
                        </div>    
                    </div>

                    <div className="card-body" onClick={openApplicationModal}>
                        <div className="card-content">
                            <h3 className="card-title">Apply to Us</h3>
                            <h4 className="card-subtitle">Wanna work with Us? Come and apply Now!</h4>
                        </div>
                    </div>
                </div>
                <div className='contact-screen-bg'></div>
            </div>
        
            <Modal show={showFeedbackModal} onHide={closeFeedbackModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Feedback Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'><FeedbackModal></FeedbackModal></Modal.Body>
                <Modal.Footer>
                    <button className='modal-close-button' onClick={closeFeedbackModal}>Close</button>
                    <button className='modal-save-button' onClick={closeFeedbackModal}>Save</button>
                </Modal.Footer>
            </Modal>

            <Modal show={showReportModal} onHide={closeReportModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Report Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'><ReportModal></ReportModal></Modal.Body>
                <Modal.Footer>
                    <button className='modal-close-button' onClick={closeFeedbackModal}>Close</button>
                    <button className='modal-save-button' onClick={closeFeedbackModal}>Save</button>
                </Modal.Footer>
            </Modal>

            <Modal show={showApplicationModal} onHide={closeApplicationModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Application Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className='modal-close-button' onClick={closeFeedbackModal}>Close</button>
                    <button className='modal-save-button' onClick={closeFeedbackModal}>Save</button>
                </Modal.Footer>
            </Modal>
        </> 
    )
}

export default ContactScreen