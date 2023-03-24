import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AdminMenu.css';

const AdminMenu = () => {
    const [showAdminMenu, setAdminMenu] = useState(true);
    const [showFeedbackMenu, setFeedbackMenu] = useState(false);
    const [showReportMenu, setReportMenu] = useState(false);
    const [showApplyMenu, setApplyMenu] = useState(false);

    const ReturnToAdminMenu = () => {setAdminMenu(true); setFeedbackMenu(false); setReportMenu(false); setApplyMenu(false)}

    const ShowFeedbackClick = () => {setAdminMenu(false); setFeedbackMenu(true)}
    const ShowReportClick = () => {setAdminMenu(false); setReportMenu(true)}
    const ShowApplyClick = () => {setAdminMenu(false); setApplyMenu(true)}
    
    return (
        <>
            {
                showAdminMenu ?
                    <div className='admin-main-body'>
                        <div className='admin-body-divider'>
                            <div className='admin-ticket-container'>
                                <h1>new ticket here</h1>
                            </div>
                            <div className='admin-menu-container'>
                                <div id='admin-feedback-section' className='admin-section-card' onClick={ShowFeedbackClick}>
                                    <Link className='admin-menu-link'>Customer Feedback Tickets</Link>
                                </div>
                                <div id='admin-report-section' className='admin-section-card' onClick={ShowReportClick}>
                                    <Link className='admin-menu-link'>Customer Report Tickets</Link>
                                </div>
                                <div id='admin-apply-section' className='admin-section-card' onClick={ShowApplyClick}>
                                    <Link className='admin-menu-link'>Application Tickets</Link>
                                </div>
                            </div>
                        </div>
                        <div className='admin-image-section'>
                            <h1>image here</h1>
                        </div>
                    </div>
                : null
            }

            {
                showFeedbackMenu ?
                    <div>
                        <Link className='admin-menu-link' onClick={ReturnToAdminMenu}>Customer Feedback Tickets</Link>
                    </div>
                :null
            }

            {
                showReportMenu ?
                    <div>
                        <Link className='admin-menu-link' onClick={ReturnToAdminMenu}>Customer Feedback Tickets</Link>
                    </div>
                :null
            }

            {
                showApplyMenu ?
                    <div>
                        <Link className='admin-menu-link' onClick={ReturnToAdminMenu}>Customer Feedback Tickets</Link>
                    </div>
                :null
            }
        </>     
    )
}

export default AdminMenu