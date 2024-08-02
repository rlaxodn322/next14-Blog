import React from 'react';
import styled from 'styled-components';
import { Post } from '../types/Post';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const PostItemContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
`;

interface PostItemProps {
  post: Post;
  onEdit: () => void;
  onDelete: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onEdit, onDelete }) => (
  <PostItemContainer>
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>작성일: {post.date}</p>
    </div>
    <div>
      <EditButton onClick={onEdit}>수정</EditButton>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </div>
  </PostItemContainer>
);

export default PostItem;
