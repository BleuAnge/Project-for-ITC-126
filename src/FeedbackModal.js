import './Modal.css';
import './Utility.css';

const FeedbackModal = () => {
    return (
        <div className="modal-body">
            <div className="modal-main-info">
                <p>Feedback Ticket ID: 111111</p><br></br>
                <p>Username: Ytma Natz</p>
            </div>
            <div className="modal-submit-options">
                <label for="feedback-rate">Please Rate Us: </label><br></br>
                <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <br></br>
                <br></br>
                <label for="textbox">Input Feedback Here: </label><br></br>
                <textarea className="textbox" rows="4" column="50">
                    This is a.... FEEDBACK!
                </textarea>
            </div>
        </div>
    )
}

export default FeedbackModal