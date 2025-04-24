import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import { clearNotification } from '../../redux/slices/uiSlice';

const Notification = ({ message, type = 'info' }) => {
  const dispatch = useDispatch();

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, message]);

  const handleDismiss = () => {
    dispatch(clearNotification());
  };

  // Determine icon based on notification type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle />;
      case 'warning':
        return <FaExclamationTriangle />;
      case 'error':
        return <FaTimesCircle />;
      case 'info':
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <NotificationContainer
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      $type={type}
    >
      <IconContainer>{getIcon()}</IconContainer>
      <Message>{message}</Message>
      <CloseButton onClick={handleDismiss}>
        <FaTimes />
      </CloseButton>
    </NotificationContainer>
  );
};

const NotificationContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--color-card-bg);
  border-left: 4px solid ${({ $type }) => {
    switch ($type) {
      case 'success':
        return 'var(--color-success)';
      case 'warning':
        return 'var(--color-warning)';
      case 'error':
        return 'var(--color-error)';
      case 'info':
      default:
        return 'var(--color-info)';
    }
  }};
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 1000;
  max-width: 400px;
  min-width: 300px;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: ${({ $type }) => {
    switch ($type) {
      case 'success':
        return 'var(--color-success)';
      case 'warning':
        return 'var(--color-warning)';
      case 'error':
        return 'var(--color-error)';
      case 'info':
      default:
        return 'var(--color-info)';
    }
  }};
`;

const Message = styled.p`
  flex: 1;
  margin: 0;
  color: var(--color-text);
  font-size: 0.875rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-text);
  }
`;

export default Notification;
