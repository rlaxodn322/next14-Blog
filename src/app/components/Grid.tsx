import React from 'react';

const divparents: React.CSSProperties = {
  margin: '0 auto',
  alignItems: 'center',
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
};
const divstyle: React.CSSProperties = {
  padding: '15px 80px',
  cursor: 'pointer',
};
const App: React.FC = () => (
  <>
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <div style={divparents}>
        <div style={{ width: '20%' }}>
          <img src="/icons/man.svg" style={{ width: '20%' }}></img>
        </div>
        <div style={{ width: '70%', display: 'flex' }}>
          <div style={divstyle}>1</div>
          <div style={divstyle}>2</div>
          <div style={divstyle}>3</div>
          <div style={divstyle}>4</div>
          <div style={divstyle}>5</div>
        </div>
      </div>
    </div>
  </>
);

export default App;
