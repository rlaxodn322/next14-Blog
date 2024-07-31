'use client'; // 이 컴포넌트는 클라이언트 측에서 실행됩니다.

import React, { useState } from 'react';
import { Modal, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import type { RcFile } from 'antd/es/upload/interface';

// 전체 컨테이너
const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
`;

// 사진첩 그리드
const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

// 사진 항목
const GalleryItem = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// 등록 버튼 스타일
const UploadButton = styled(Button)`
  padding: 0 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const About: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (file: RcFile) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages((prevImages) => [...prevImages, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    try {
      if (file) {
        handleImageChange(file as RcFile);
      }
      onSuccess?.({}, file);
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GalleryContainer>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>사진첩</h2>
      <Upload name="image" showUploadList={false} customRequest={customRequest}>
        <UploadButton icon={<UploadOutlined />}>이미지 업로드</UploadButton>
      </Upload>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <img src={image} alt={`Gallery ${index}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
      <Modal
        title="이미지 업로드"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <Upload
          name="image"
          showUploadList={false}
          customRequest={customRequest}
        >
          <Button icon={<UploadOutlined />}>이미지 업로드</Button>
        </Upload>
      </Modal>
    </GalleryContainer>
  );
};

export default About;
