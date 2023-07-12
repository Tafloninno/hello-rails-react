import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMessage } from './redux/messagesSlice';
import Greeting from './Greeting';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;