import './Modal.css';
import './Utility.css';

const ReportModal = () => {
    return (
        <div className="modal-body">
            <div className="modal-main-info">
                <p>Report Ticket ID: 111111</p>
                <br></br>
                <p>Date: 3/16/23</p>
                <br></br>
                <p>Time: 9:46 am</p>
                <br></br>
                <p>Username: Ytma Natz</p>
            </div>
            <div className="modal-submit-options">
                
                <label for="report-type">Select Report Type: </label>
                <select className="report-type">
                    <option value="manage_reciept">Manage Order Receipt</option>
                    <option value="cancelled_order">Cancelled Order/Order Didnt Show Up</option>
                    <option value="food_safety">Food Safety</option>
                    <option value="restaurant_issue">Restaurant Issue</option>
                    <option value="tako_eats_issue">Tako Eats Issue</option>
                </select>
                <br></br>
                <br></br>
                <label for="order-id">Input Order ID: </label>
                <input type="text" className="order-id"></input>
                <br></br>
                <br></br>
                <label for="textbox">Input Report Detail Here: </label><br></br>
                <textarea className="textbox" rows="4" column="50">
                    This is a.... Report!
                </textarea>
            </div>
        </div>
    )
}

export default ReportModal