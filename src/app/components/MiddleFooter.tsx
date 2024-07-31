import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
  width: 1200px;
  height: 400px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;
const SubBox = styled.div`
  margin: 10px;
  height: 90%;
  width: 20%;
  //border: 1px solid lightgray;
`;
const TitleBox = styled.div`
  margin-bottom: 20px;
`;
const StoryBox = styled.div``;
const MiddleFooter: React.FC = () => {
  return (
    <>
      <MainBox>
        <SubBox>
          <div>
            <img
              style={{ width: '15%', marginBottom: '30px' }}
              src="icons/sns.svg"
            ></img>{' '}
          </div>
          <div style={{ display: 'flex' }}>
            <img style={{ width: '15%' }} src="icons/facebook.svg"></img>
            <img style={{ width: '15%' }} src="icons/naver.svg"></img>
            <img style={{ width: '15%' }} src="icons/youtube.svg"></img>
            <img style={{ width: '15%' }} src="icons/insta.svg"></img>
          </div>
        </SubBox>
        <SubBox>
          <TitleBox>Use cases</TitleBox>
          <StoryBox>US design</StoryBox>
          <StoryBox>UI design</StoryBox>
          <StoryBox>Wireframing</StoryBox>
          <StoryBox>Diagramming</StoryBox>
          <StoryBox>Brainstorming</StoryBox>
          <StoryBox>Online whiteboard</StoryBox>
          <StoryBox>Team collaboration</StoryBox>
        </SubBox>
        <SubBox>
          <TitleBox>Use cases</TitleBox>
          <StoryBox>Design</StoryBox>
          <StoryBox>Prototyping</StoryBox>
          <StoryBox>Development features</StoryBox>
          <StoryBox>Design systems</StoryBox>
          <StoryBox>Collaboration features</StoryBox>
          <StoryBox>Design process</StoryBox>
          <StoryBox>FigJam</StoryBox>
        </SubBox>
        <SubBox>
          <TitleBox>Resources</TitleBox>
          <StoryBox>Blog</StoryBox>
          <StoryBox>Best practices</StoryBox>
          <StoryBox>Colors</StoryBox>
          <StoryBox>Color wheel</StoryBox>
          <StoryBox>Support</StoryBox>
          <StoryBox>Developers</StoryBox>
          <StoryBox>Resource library</StoryBox>
        </SubBox>
      </MainBox>
    </>
  );
};

export default MiddleFooter;
