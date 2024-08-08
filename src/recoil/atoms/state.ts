import { atom } from 'recoil';
import { Message } from '../../types/Post';
export const state = atom({
  key: 'state',
  default: [],
});

// 메시지 상태를 정의
export const chatState = atom<Message[]>({
  key: 'chatState', // 고유한 키
  default: [], // 초기 상태
});
