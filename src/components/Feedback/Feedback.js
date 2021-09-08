import React, { memo } from 'react';
import { TOGGLE_DATA } from '../../Reducer/actions';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Profile from '../Sidebar/Profile';

const Feedback = ({ dispatch, trigger }) => {
  return (
    <>
      {trigger ? (
        <div className="feedback">
          <div className="feedbackDiv">
            <div className="closeButton">
              <button
                onClick={() =>
                  dispatch({
                    type: TOGGLE_DATA,
                    payload: { name: 'toggleFeedback' },
                  })
                }
              >
                Close
              </button>
            </div>
            <div className="row p-5">
              <div className="col-lg-4">
                <Profile />
                <div className="sendFeedback mt-3">
                  <h3>Have A Feedback?</h3>
                  <button style={{ backgroundColor: '#EAA2A6' }}>
                    We're Listening
                  </button>
                </div>
              </div>
              <div className="col-lg-8">
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(Feedback);
