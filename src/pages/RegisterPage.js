import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaUserPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';
import { setNotification } from '../redux/slices/uiSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to register the user
      const user = {
        id: '1',
        name: name,
        email: email,
        avatar: null,
      };
      
      dispatch(login(user));
      dispatch(setNotification({
        message: 'Registration successful! Welcome to TastyRecipes.',
        type: 'success'
      }));
      
      setIsLoading(false);
      navigate('/profile');
    }, 1000);
  };
  
  const handleSocialRegister = (provider) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an OAuth flow
      const user = {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        avatar: null,
      };
      
      dispatch(login(user));
      dispatch(setNotification({
        message: `Registration with ${provider} successful!`,
        type: 'success'
      }));
      
      setIsLoading(false);
      navigate('/profile');
    }, 1000);
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FormContainer>
        <FormHeader>
          <FormTitle>Create an Account</FormTitle>
          <FormSubtitle>
            Join our community of food lovers and start saving your favorite recipes!
          </FormSubtitle>
        </FormHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputIcon>
              <FaUser />
            </InputIcon>
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
          
          <TermsAgreement>
            <Checkbox
              type="checkbox"
              id="agree-terms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <CheckboxLabel htmlFor="agree-terms">
              I agree to the <TermsLink to="/terms">Terms of Service</TermsLink> and <TermsLink to="/privacy">Privacy Policy</TermsLink>
            </CheckboxLabel>
          </TermsAgreement>
          
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
            <FaUserPlus />
          </SubmitButton>
        </Form>
        
        <Divider>
          <DividerText>or register with</DividerText>
        </Divider>
        
        <SocialButtons>
          <SocialButton
            type="button"
            onClick={() => handleSocialRegister('Google')}
            disabled={isLoading}
          >
            <FaGoogle />
            <span>Google</span>
          </SocialButton>
          
          <SocialButton
            type="button"
            onClick={() => handleSocialRegister('Facebook')}
            disabled={isLoading}
          >
            <FaFacebook />
            <span>Facebook</span>
          </SocialButton>
        </SocialButtons>
        
        <LoginPrompt>
          Already have an account?{' '}
          <LoginLink to="/login">Login</LoginLink>
        </LoginPrompt>
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  
  @media (max-width: 576px) {
    padding: 2rem 1.5rem;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const FormSubtitle = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
`;

const ErrorMessage = styled.div`
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--color-error);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-light);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-text-light);
  }
`;

const TermsAgreement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.75rem;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 2px;
  
  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    
    &:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 10px;
    }
  }
`;

const CheckboxLabel = styled.label`
  color: var(--color-text);
  cursor: pointer;
  line-height: 1.4;
`;

const TermsLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
  
  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 1.5rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-border);
  }
`;

const DividerText = styled.span`
  position: relative;
  background-color: var(--color-card-bg);
  padding: 0 1rem;
  font-size: 0.75rem;
  color: var(--color-text-light);
`;

const SocialButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  svg {
    font-size: 1rem;
  }
`;

const LoginPrompt = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text);
`;

const LoginLink = styled(Link)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterPage;
