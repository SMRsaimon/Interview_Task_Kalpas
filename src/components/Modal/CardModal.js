import React, { memo } from 'react';
import DefaultImg from '../../assets/images/default.jpg';
import { TOGGLE_DATA } from '../../Reducer/actions';

const CardModal = ({ state, dispatch }) => {


  return (
    <>
      {state.toggleModal ? (
        <div className="cardModal">
          <div className="modalInner">
            <img
              src={
                 DefaultImg
              }
              alt=""
            />
            <h3>{state?.singleCard?.title}</h3>
           
            <p>
              {state?.singleCard?.body &&
                state?.singleCard?.body.substr(0, 350)}
            </p>
            <button
              onClick={() =>
                dispatch({
                  type: TOGGLE_DATA,
                  payload: { name: 'toggleModal' },
                })
              }
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(CardModal);
