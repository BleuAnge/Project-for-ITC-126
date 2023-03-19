import { Link } from 'react-router-dom';
import './AdminMenu.css';

const AdminMenu = () => {
    return (
        <div className='admin-main-body'>
            <div className='admin-body-divider'>
                <div className='admin-ticket-container'>
                    <h1>new ticket here</h1>
                </div>
                <div className='admin-menu-container'>
                    <div id='admin-feedback-section' className='admin-section-card'>
                        <Link className='admin-menu-link'>Customer Feedback Tickets</Link>
                    </div>
                    <div id='admin-report-section' className='admin-section-card'>
                        <Link className='admin-menu-link'>Customer Report Tickets</Link>
                    </div>
                    <div id='admin-apply-section' className='admin-section-card'>
                        <Link className='admin-menu-link'>Application Tickets</Link>
                    </div>
                </div>
            </div>
            <div className='admin-image-section'>
                <h1>image here</h1>
            </div>
        </div>
    )
}

export default AdminMenu