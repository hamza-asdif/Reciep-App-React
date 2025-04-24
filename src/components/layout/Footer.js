import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <span className="primary">Tasty</span>Recipes
          </FooterLogo>
          <FooterDescription>
            Discover delicious recipes from around the world. Search, save, and share your favorite meals.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterSectionTitle>Quick Links</FooterSectionTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/categories">Categories</FooterLink>
            <FooterLink to="/popular">Popular Recipes</FooterLink>
            <FooterLink to="/latest">Latest Recipes</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterSectionTitle>Categories</FooterSectionTitle>
          <FooterLinks>
            <FooterLink to="/category/Breakfast">Breakfast</FooterLink>
            <FooterLink to="/category/Lunch">Lunch</FooterLink>
            <FooterLink to="/category/Dinner">Dinner</FooterLink>
            <FooterLink to="/category/Dessert">Dessert</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterSectionTitle>Help & Support</FooterSectionTitle>
          <FooterLinks>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © {currentYear} TastyRecipes. All rights reserved.
        </Copyright>
        <MadeWith>
          Made with <FaHeart className="heart" /> using React
        </MadeWith>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--color-card-bg);
  color: var(--color-text);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  .primary {
    color: var(--color-primary);
  }
`;

const FooterDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1.2rem;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--color-primary);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: var(--color-text-light);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    padding-left: 5px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`;

const MadeWith = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  .heart {
    color: var(--color-primary);
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Footer;
