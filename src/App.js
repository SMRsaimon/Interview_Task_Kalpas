import React, { useContext, useEffect } from 'react';
import './App.scss';
import DisplayItems from './components/DisplayItems/DisplayItems';
import Feedback from './components/Feedback/Feedback';
import CardModal from './components/Modal/CardModal';
import Sidebar from './components/Sidebar/Sidebar';
import { ViewContext } from './Contexts/ViewContextProvider';
import { STORE_DATA } from './state/actions';
import './style/global.scss';
const App = () => {
  const { state, dispatch } = useContext(ViewContext);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: STORE_DATA, payload: { data: data, name: 'data' } });
      });
  }, []);
  
  return (
    <div className="contain__div">
      <CardModal state={state} dispatch={dispatch} />
      <Feedback trigger={state?.toggleFeedback} dispatch={dispatch} />
      <div className="sidebar">
        <Sidebar state={state} dispatch={dispatch} />
      </div>
      <div className="content">
        <DisplayItems loadData={state?.data} viewStyle={state?.viewStyle} />
      </div>
    </div>
  );
};

export default App;
