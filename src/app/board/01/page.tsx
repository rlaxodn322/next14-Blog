'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import dayjs from 'dayjs';
import BoardContainer from '../../../components/BoardContainer';
import ButtonContainer from '../../../components/ButtonContainer';
import PostList from '../../../components/PostList';
import PostItem from '../../../components/PostItem';
import WriteButton from '../../../components/WriteButton';
import PostModal from '../../../components/PostModal';
import { Post } from '../../../types/Post';
import Confetti from 'react-confetti';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showConfetti, setShowConfetti] = useState(false); // 컨페티 상태 추가

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
        likes: 0, // 좋아요 수 초기화
        comments: [], // 댓글 초기화
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

  const handleLike = (id: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            likes: post.likes + 1, // 좋아요 수 증가
          }
        : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // 컨페티 효과 표시
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // 3초 후 컨페티 효과 숨기기
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
            onLike={() => handleLike(post.id)} // 좋아요 핸들러 추가
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
      {showConfetti && (
        <Confetti
          numberOfPieces={1000}
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={0.2}
          wind={0}
        />
      )}{' '}
      {/* 컨페티 효과 표시 */}
    </BoardContainer>
  );
};

export default Blog;
