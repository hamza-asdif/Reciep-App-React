import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaSpinner } from "react-icons/fa";
import {
  verifyEmail,
  resendVerificationEmail,
} from "../redux/slices/userSlice";
import { setNotification } from "../redux/slices/uiSlice";

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    // Check for token in URL
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      setIsVerifying(true);
      dispatch(verifyEmail(token))
        .unwrap()
        .then(() => {
          dispatch(
            setNotification({
              message: "Email verified successfully! You can now log in.",
              type: "success",
            })
          );
          navigate("/login");
        })
        .catch((error) => {
          dispatch(
            setNotification({
              message: "Email verification failed. Please try again.",
              type: "error",
            })
          );
        })
        .finally(() => {
          setIsVerifying(false);
        });
    }
  }, [dispatch, location, navigate]);

  const handleResendEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      dispatch(
        setNotification({
          message: "Please enter your email address",
          type: "error",
        })
      );
      return;
    }

    setIsResending(true);
    try {
      await dispatch(resendVerificationEmail(email)).unwrap();
      dispatch(
        setNotification({
          message:
            "Verification email has been resent. Please check your inbox.",
          type: "success",
        })
      );
    } catch (error) {
      dispatch(
        setNotification({
          message: "Failed to resend verification email. Please try again.",
          type: "error",
        })
      );
    }
    setIsResending(false);
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VerifyContainer>
        <IconContainer>
          <FaEnvelope />
        </IconContainer>

        <Title>Verify Your Email</Title>

        {isVerifying ? (
          <LoadingMessage>
            <FaSpinner className="spinner" />
            Verifying your email...
          </LoadingMessage>
        ) : (
          <>
            <Description>
              Please check your email for a verification link. If you haven't
              received the email, you can request a new one below.
            </Description>

            <Form onSubmit={handleResendEmail}>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <SubmitButton type="submit" disabled={isResending}>
                {isResending ? (
                  <>
                    <FaSpinner className="spinner" />
                    Resending...
                  </>
                ) : (
                  "Resend Verification Email"
                )}
              </SubmitButton>
            </Form>
          </>
        )}
      </VerifyContainer>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
`;

const VerifyContainer = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
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
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-text-light);

  .spinner {
    animation: spin 1s linear infinite;
  }
`;

export default VerifyEmailPage;
