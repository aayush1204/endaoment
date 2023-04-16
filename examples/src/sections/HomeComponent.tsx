import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
interface HomeComponentProps {
  
}

const HomeComponent: React.FC<HomeComponentProps> = () => {
  const navigate = useNavigate();

  function navigateToComponentA() {
    navigate('/charity');
  }

  function navigateToComponentB() {
    navigate('/video');
  }

  function navigateToComponentC() {
    navigate('/aboutus');
  }

  return (
    <div style={{alignContent:'center'}}>
      <Button style={{ marginRight: '20px' }} onClick={navigateToComponentA}>Go to Charity</Button>
      <Button style={{ marginRight: '20px' }} onClick={navigateToComponentB}>Go to Video</Button>
      <Button onClick={navigateToComponentC}>Go to AboutUs</Button>
    </div>
  );
};

export default HomeComponent;
