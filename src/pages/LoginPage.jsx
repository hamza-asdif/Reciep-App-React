import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaSignInAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";
import { setNotification } from "../redux/slices/uiSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      if (result) {
        dispatch(
          setNotification({
            message: "Login successful! Welcome back.",
            type: "success",
          })
        );
        navigate("/profile");
      }
    } catch (err) {
      if (err.includes("Email not confirmed")) {
        setError("Please verify your email address first");
        dispatch(
          setNotification({
            message: "Please check your email for verification link",
            type: "warning",
          })
        );
        navigate("/verify-email");
      } else {
        setError("Invalid email or password");
      }
    }
    setIsLoading(false);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("Social login is not implemented yet.");
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
          <FormTitle>Login to Your Account</FormTitle>
          <FormSubtitle>
            Welcome back! Please enter your details to access your account.
          </FormSubtitle>
        </FormHeader>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
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

          <FormOptions>
            <RememberMe>
              <Checkbox
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <CheckboxLabel htmlFor="remember-me">Remember me</CheckboxLabel>
            </RememberMe>

            <ForgotPassword to="/forgot-password">
              Forgot password?
            </ForgotPassword>
          </FormOptions>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
            <FaSignInAlt />
          </SubmitButton>
        </Form>

        <Divider>
          <DividerText>or continue with</DividerText>
        </Divider>

        <SocialButtons>
          <SocialButton
            type="button"
            onClick={() => handleSocialLogin("Google")}
            disabled={isLoading}
          >
            <FaGoogle />
            <span>Google</span>
          </SocialButton>

          <SocialButton
            type="button"
            onClick={() => handleSocialLogin("Facebook")}
            disabled={isLoading}
          >
            <FaFacebook />
            <span>Facebook</span>
          </SocialButton>
        </SocialButtons>

        <SignupPrompt>
          Don't have an account? <SignupLink to="/register">Sign up</SignupLink>
        </SignupPrompt>
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

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &:after {
      content: "✓";
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
`;

const ForgotPassword = styled(Link)`
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
    content: "";
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

const SignupPrompt = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text);
`;

const SignupLink = styled(Link)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;
