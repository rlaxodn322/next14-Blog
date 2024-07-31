import React from 'react';
import styled from 'styled-components';
const ImgStyle = styled.div`
  width: 1200px;
  height: 300px;
  background: lightgray;
`;
const ImgBox: React.FC = () => {
  return (
    <>
      <ImgStyle>
        <div></div>
      </ImgStyle>
    </>
  );
};

export default ImgBox;
