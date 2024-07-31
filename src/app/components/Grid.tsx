import React from 'react';
const divparents: React.CSSProperties = {
  margin: '0 auto',
  alignItems: 'center',
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
};
const divstyle: React.CSSProperties = {
  margin: '15px 45px',
  cursor: 'pointer',
};

const App: React.FC = () => (
  <>
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <div style={divparents}>
        <div style={{ width: '10%' }}>
          <img src="/icons/man.svg" style={{ width: '40%' }}></img>
        </div>
        <div style={{ width: '80%', display: 'flex' }}>
          <div style={divstyle}>Pricing</div>
          <div style={divstyle}>Solutions</div>
          <div style={divstyle}>Commnuity</div>
          <div style={divstyle}>Resources</div>
          <div style={divstyle}>Pricing</div>
          <div style={divstyle}>Contact</div>
        </div>
      </div>
    </div>
  </>
);

export default App;
