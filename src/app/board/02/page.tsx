'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Popconfirm } from 'antd';
import dayjs from 'dayjs';
import BoardContainer from '../../../components/BoardContainer';
import ButtonContainer from '../../../components/ButtonContainer';
import PostList from '../../../components/PostList';
import PostItem from '../../../components/PostItem';
import WriteButton from '../../../components/WriteButton';
import PostModal from '../../../components/PostModal';
import { Post } from '../../../types/Post';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  const openModal = (post?: Post) => {
    if (post) {
      setEditingPost(post);
      setNewPost({ title: post.title, content: post.content });
    } else {
      setEditingPost(null);
      setNewPost({ title: '', content: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editingPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id
          ? {
              ...post,
              title: newPost.title,
              content: newPost.content,
              date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            }
          : post
      );
      setPosts(updatedPosts);
    } else {
      const newPostWithDate = {
        ...newPost,
        id: posts.length + 1,
        date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      };
      const updatedPosts = [...posts, newPostWithDate];
      setPosts(updatedPosts);
    }
    localStorage.setItem('posts', JSON.stringify(posts));
    setNewPost({ title: '', content: '' });
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <BoardContainer>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>게시판</h2>
      <ButtonContainer>
        <WriteButton onClick={() => openModal()}>글 작성</WriteButton>
      </ButtonContainer>
      <PostList>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onEdit={() => openModal(post)}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </PostList>
      <PostModal
        isVisible={isModalOpen}
        title={editingPost ? '글 수정' : '새 글 작성'}
        post={newPost}
        onInputChange={handleInputChange}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </BoardContainer>
  );
};

export default Blog;
