import { DELETE_DATA, STORE_DATA, TOGGLE_DATA, TOGGLE_VIEW } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((dt) => dt.id !== action.payload.id),
      };
    case TOGGLE_DATA:
      return {
        ...state,
        [action.payload.name]: !state?.[action.payload.name],
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        viewStyle: action.payload.data,
      };
    default:
      return state;
  }
};
