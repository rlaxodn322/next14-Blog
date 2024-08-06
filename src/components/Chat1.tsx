'use client';
import React, { useState, useEffect, useRef } from 'react';
import { fetchmessage, sendmessage } from '../apis/test';
const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chat1, setChat1] = useState<string[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null); // 채팅 박스를 참조하는 ref

  useEffect(() => {
    // 브라우저의 로컬 저장소에서 이전 채팅 기록을 가져옴
    const storedChat = localStorage.getItem('chat1');
    if (storedChat) {
      setChat1(JSON.parse(storedChat));
    }
    // 컴포넌트가 마운트될 때 서버에서 데이터를 가져옴
    const fetchData = async () => {
      try {
        const data = await fetchmessage();
        console.log('서버에서 가져온 데이터:', data);
        // 필요한 경우 서버에서 가져온 데이터를 처리
      } catch (error) {
        console.error('데이터 가져오기 에러:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 채팅 내용이 변경될 때마다 스크롤을 맨 아래로 이동
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat1]);

  const sendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await sendmessage(message);
        console.log('서버 응답', response);
        const newChat = [...chat1, message];
        setChat1(newChat);
        localStorage.setItem('chat1', JSON.stringify(newChat)); // 로컬 저장소에 저장
        setMessage('');
      } catch (error) {
        console.error('메시지 전송 에러', error);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox} ref={chatBoxRef}>
        {chat1.map((msg, index) => (
          <div key={index} style={styles.message}>
            {msg}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          전송
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  chatBox: {
    width: '100%',
    maxHeight: '300px',
    overflowY: 'auto' as 'auto',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  message: {
    margin: '5px 0',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#e0e0e0',
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    outline: 'none',
  },
  button: {
    marginLeft: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Chat;
