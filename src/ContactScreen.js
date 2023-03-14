import './ContactScreen.css';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

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
                    <div className="card">
                        <button className="card-content"  onClick={openFeedbackModal}>Send Feedback</button>
                    </div>

                    <div className="card">
                        <button className="card-content" onClick={openReportModal}>Report Issue</button>
                    </div>

                    <div className="card">
                        <button className="card-content" onClick={openApplicationModal}>Apply To Us</button>
                    </div>
                </div>
            </div>

            <Modal show={showFeedbackModal} onHide={closeFeedbackModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Feedback Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeFeedbackModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeFeedbackModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showReportModal} onHide={closeReportModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Report Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeReportModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeReportModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showApplicationModal} onHide={closeApplicationModal}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-text'>Application Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-text'>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeApplicationModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeApplicationModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </> 
    )
}

export default ContactScreen