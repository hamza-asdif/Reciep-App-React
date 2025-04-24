import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setNotification } from '../redux/slices/uiSlice';

const ContactPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      dispatch(setNotification({
        message: 'Please fill in all required fields',
        type: 'error'
      }));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      dispatch(setNotification({
        message: 'Your message has been sent! We\'ll get back to you soon.',
        type: 'success'
      }));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <PageTitle>Contact Us</PageTitle>
        <PageDescription>
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </PageDescription>
      </PageHeader>
      
      <ContactContainer>
        <ContactInfo>
          <InfoTitle>Get in Touch</InfoTitle>
          <InfoDescription>
            Our team is here to help. Fill out the form and we'll get back to you as soon as possible.
          </InfoDescription>
          
          <ContactMethods>
            <ContactMethod>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactDetails>
                <ContactMethodTitle>Email</ContactMethodTitle>
                <ContactMethodValue>support@tastyrecipes.com</ContactMethodValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactDetails>
                <ContactMethodTitle>Phone</ContactMethodTitle>
                <ContactMethodValue>+1 (555) 123-4567</ContactMethodValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactDetails>
                <ContactMethodTitle>Address</ContactMethodTitle>
                <ContactMethodValue>123 Recipe Street, Foodville, CA 94123</ContactMethodValue>
              </ContactDetails>
            </ContactMethod>
          </ContactMethods>
          
          <OfficeHours>
            <OfficeHoursTitle>Office Hours</OfficeHoursTitle>
            <OfficeHoursText>Monday - Friday: 9:00 AM - 5:00 PM</OfficeHoursText>
            <OfficeHoursText>Saturday - Sunday: Closed</OfficeHoursText>
          </OfficeHours>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send a Message</FormTitle>
          
          <FormGroup>
            <FormLabel htmlFor="name">Name *</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message *</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
      
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>How do I save a recipe to my favorites?</FAQQuestion>
            <FAQAnswer>
              To save a recipe to your favorites, click on the heart icon on any recipe card or recipe detail page. 
              You can view all your favorites in the "Favorites" section of your profile.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Can I create my own recipes?</FAQQuestion>
            <FAQAnswer>
              Currently, we don't support user-submitted recipes, but we're working on adding this feature in the future. 
              Stay tuned for updates!
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>How do I use the meal planner?</FAQQuestion>
            <FAQAnswer>
              The meal planner allows you to organize your meals for the week. Navigate to the "Meal Planner" section, 
              then click on any day and meal time to add a recipe from your favorites or from our collection.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Is there a mobile app available?</FAQQuestion>
            <FAQAnswer>
              We're currently developing mobile apps for iOS and Android. In the meantime, our website is fully 
              responsive and works great on mobile devices.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const ContactDetails = styled.div``;

const ContactMethodTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const ContactMethodValue = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`;

const OfficeHours = styled.div`
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`;

const OfficeHoursTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const OfficeHoursText = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const ContactForm = styled.form`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
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
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  resize: vertical;
  min-height: 120px;
  transition: border-color var(--transition-fast);
  
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
  padding: 0.75rem 1.5rem;
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

const FAQSection = styled.section`
  margin-bottom: 2rem;
`;

const FAQTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
`;

const FAQContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const FAQQuestion = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const FAQAnswer = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  line-height: 1.6;
`;

export default ContactPage;
