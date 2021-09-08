import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import DefaultImg from '../../assets/images/default.jpg';
import { ViewContext } from '../../Contexts/ViewContextProvider';
import { DELETE_DATA, STORE_DATA, TOGGLE_DATA } from '../../Reducer/actions';

const CardItem = ({ item }) => {
  const { state, dispatch } = useContext(ViewContext);
  const { id, title, body } = item;



  const handleDeleteItems = (id) => {
    dispatch({
      type: DELETE_DATA,
      payload: { id },
    });
  };
  const handleViewCard = (id) => {
    const findItem = state?.data?.find((data) => data.id === id);
    dispatch({
      type: STORE_DATA,
      payload: { data: findItem, name: 'singleCard' },
    });
    dispatch({
      type: TOGGLE_DATA,
      payload: { name: 'toggleModal' },
    });
  };
  return (
    <div className="item">
      <div className="cardBody" onClick={() => handleViewCard(id)}>
        <div className="img">
          <img src={DefaultImg} alt="img" />
        </div>
        <div className="itemContent">
          <h3 className="text-capitalize">{title}</h3>
          {state.viewStyle === 'grid' ? (
            <p>{body?.substr(0, 80)}</p>
          ) : (
            <p>{body?.substr(0, 100)}</p>
          )}
         <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      <div className="delete" onClick={() => handleDeleteItems(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default CardItem;
