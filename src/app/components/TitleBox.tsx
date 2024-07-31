import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 300px;
  background-color: white;
`;
const TitleBox: React.FC = () => {
  return (
    <>
      <TitleStyle>
        <div style={{ textAlign: 'center' }}>
          <h2>Title</h2>
          <Button>Button</Button>
          <Button>Button</Button>
        </div>
      </TitleStyle>
    </>
  );
};

export default TitleBox;
