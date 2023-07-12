import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const messages = useSelector((state) => state.messages);

  if (messages.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        <span>Random Greeting: </span>
        <span>{messages.message}</span>
      </h1>
    </>
  );
};

export default Greeting;