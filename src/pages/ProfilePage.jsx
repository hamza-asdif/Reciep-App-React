import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaHeart, FaCalendarAlt, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsAuthenticated, selectTheme, setTheme, logout, selectFavorites } from '../redux/slices/userSlice';
import { setNotification } from '../redux/slices/uiSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const theme = useSelector(selectTheme);
  const favorites = useSelector(selectFavorites);
  
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(
        setNotification({
          message: 'You must be logged in to view this page',
          type: 'error',
        })
      );
      navigate('/login');
    }
  }, [isAuthenticated, dispatch, navigate]);
  
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    dispatch(setNotification({
      message: `Theme changed to ${newTheme} mode`,
      type: 'success'
    }));
  };
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(setNotification({
      message: 'You have been logged out',
      type: 'info'
    }));
    navigate('/');
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProfileHeader>
        <ProfileAvatar>
          {user?.avatar ? (
            <AvatarImage src={user.avatar} alt={user.name} />
          ) : (
            <AvatarPlaceholder>
              <FaUser />
            </AvatarPlaceholder>
          )}
        </ProfileAvatar>
        <ProfileInfo>
          <ProfileName>{user?.name || 'User'}</ProfileName>
          <ProfileEmail>{user?.email || 'user@example.com'}</ProfileEmail>
          <ProfileBio>{user?.bio || 'No bio provided'}</ProfileBio>
        </ProfileInfo>
      </ProfileHeader>
      
      <ProfileStats>
        <StatCard>
          <StatIcon>
            <FaHeart />
          </StatIcon>
          <StatValue>{favorites.length}</StatValue>
          <StatLabel>Favorite Recipes</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FaCalendarAlt />
          </StatIcon>
          <StatValue>0</StatValue>
          <StatLabel>Planned Meals</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FaUser />
          </StatIcon>
          <StatValue>0</StatValue>
          <StatLabel>Created Recipes</StatLabel>
        </StatCard>
      </ProfileStats>
      
      <SectionTitle>Settings</SectionTitle>
      
      <SettingsContainer>
        <SettingItem>
          <SettingLabel>Theme</SettingLabel>
          <ThemeToggle onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <>
                <FaSun className="active" />
                <span>Light</span>
              </>
            ) : (
              <>
                <FaMoon className="active" />
                <span>Dark</span>
              </>
            )}
          </ThemeToggle>
        </SettingItem>
        
        <SettingItem>
          <SettingLabel>Notifications</SettingLabel>
          <ToggleSwitch>
            <input type="checkbox" id="notifications" defaultChecked />
            <label htmlFor="notifications"></label>
          </ToggleSwitch>
        </SettingItem>
        
        <SettingItem>
          <SettingLabel>Email Updates</SettingLabel>
          <ToggleSwitch>
            <input type="checkbox" id="email-updates" />
            <label htmlFor="email-updates"></label>
          </ToggleSwitch>
        </SettingItem>
      </SettingsContainer>
      
      <LogoutButton onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </LogoutButton>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-light);
  color: white;
  font-size: 3rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const ProfileEmail = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
`;

const ProfileBio = styled.p`
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-light);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`;

const SettingsContainer = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.div`
  font-weight: 500;
  color: var(--color-text);
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  
  svg {
    font-size: 1.25rem;
    
    &.active {
      color: var(--color-primary);
    }
  }
`;

const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + label {
      background-color: var(--color-primary);
    }
    
    &:checked + label:before {
      transform: translateX(26px);
    }
  }
  
  label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-border);
    transition: var(--transition-fast);
    border-radius: 34px;
    
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: var(--transition-fast);
      border-radius: 50%;
    }
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--color-error);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: #d32f2f;
  }
`;

export default ProfilePage;
