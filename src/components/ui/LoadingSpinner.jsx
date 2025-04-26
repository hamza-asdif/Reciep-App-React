import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SpinnerContainer>
        <Spinner />
        <SpinnerText>Loading...</SpinnerText>
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-card-bg);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 107, 107, 0.3);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  animation: ${spin} 1s ease-in-out infinite;
  margin-bottom: 1rem;
`;

const SpinnerText = styled.p`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
`;

export default LoadingSpinner;
