'use client';
import React from 'react';
import Chat from '../../../components/Chat';
const Chatting: React.FC = () => {
  return (
    <div
      style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}
    >
      <h1>채팅방</h1>
      {/* 다른 갤러리 관련 내용 */}
      <Chat />
    </div>
  );
};

export default Chatting;
