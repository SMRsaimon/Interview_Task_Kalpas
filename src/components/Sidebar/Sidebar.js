import React, { memo } from 'react';
import { TOGGLE_DATA, TOGGLE_VIEW } from '../../Reducer/actions';
import Profile from './Profile';
import './Sidebar.scss';

const Sidebar = ({ dispatch, state }) => {
  return (
    <div className="sidebarDiv">
      <Profile />
      <div className="toggle mt-3">
        <h3>View Toggle</h3>
        <div className="buttons d-flex">
          <button
            className="gridButton"
            style={{ backgroundColor: state.viewStyle === 'grid' && '#97eec8' }}
            onClick={() => {
              dispatch({ type: TOGGLE_VIEW, payload: { data: 'grid' } });
            }}
          >
            Grid
          </button>
          <button
            className="listButton"
            style={{ backgroundColor: state.viewStyle === 'list' && '#97eec8' }}
            onClick={() => {
              dispatch({ type: TOGGLE_VIEW, payload: { data: 'list' } });
            }}
          >
            List
          </button>
        </div>
      </div>
      <div className="sendFeedback mt-3">
        <h3>Have A Feedback?</h3>
        <button
          onClick={() =>
            dispatch({
              type: TOGGLE_DATA,
              payload: { name: 'toggleFeedback' },
            })
          }
        >
          We're Listening
        </button>
      </div>
    </div>
  );
};

export default memo(Sidebar);
