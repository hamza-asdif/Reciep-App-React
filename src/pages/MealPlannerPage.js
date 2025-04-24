import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPlus, FaTrash, FaUtensils } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectMealPlan, removeFromMealPlan, clearMealPlan } from '../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { openMealPlanModal } from '../redux/slices/uiSlice';

const MealPlannerPage = () => {
  const dispatch = useDispatch();
  const mealPlan = useSelector(selectMealPlan);
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
  
  // Get current week dates
  function getCurrentWeek() {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust to get Monday
    
    const monday = new Date(today.setDate(diff));
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    }
    
    return weekDates;
  }
  
  // Get previous week
  const getPreviousWeek = () => {
    const firstDay = new Date(currentWeek[0]);
    firstDay.setDate(firstDay.getDate() - 7);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay);
      date.setDate(firstDay.getDate() + i);
      weekDates.push(date.toISOString().split('T')[0]);
    }
    
    setCurrentWeek(weekDates);
  };
  
  // Get next week
  const getNextWeek = () => {
    const firstDay = new Date(currentWeek[0]);
    firstDay.setDate(firstDay.getDate() + 7);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDay);
      date.setDate(firstDay.getDate() + i);
      weekDates.push(date.toISOString().split('T')[0]);
    }
    
    setCurrentWeek(weekDates);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  // Check if a meal is planned for a specific day and meal type
  const getMealForDayAndType = (day, mealType) => {
    const dayPlan = mealPlan.find(plan => plan.day === day);
    return dayPlan ? dayPlan[mealType] : null;
  };
  
  // Handle removing a meal from the plan
  const handleRemoveMeal = (day, mealType) => {
    dispatch(removeFromMealPlan({ day, meal: mealType }));
  };
  
  // Handle adding a meal to the plan
  const handleAddMeal = (day, mealType) => {
    dispatch(openMealPlanModal({ day, mealType }));
  };
  
  // Handle clearing the entire meal plan
  const handleClearMealPlan = () => {
    if (window.confirm('Are you sure you want to clear your entire meal plan?')) {
      dispatch(clearMealPlan());
    }
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <HeaderContent>
          <PageTitle>
            <CalendarIcon>
              <FaCalendarAlt />
            </CalendarIcon>
            Meal Planner
          </PageTitle>
          <PageDescription>
            Plan your meals for the week. Add recipes to breakfast, lunch, and dinner for each day.
          </PageDescription>
        </HeaderContent>
        
        <WeekNavigation>
          <WeekButton onClick={getPreviousWeek}>Previous Week</WeekButton>
          <CurrentWeek>
            {formatDate(currentWeek[0])} - {formatDate(currentWeek[6])}
          </CurrentWeek>
          <WeekButton onClick={getNextWeek}>Next Week</WeekButton>
        </WeekNavigation>
      </PageHeader>
      
      <PlannerContainer>
        <MealTypeHeader>
          <DayCell>Day</DayCell>
          <MealCell>Breakfast</MealCell>
          <MealCell>Lunch</MealCell>
          <MealCell>Dinner</MealCell>
        </MealTypeHeader>
        
        {currentWeek.map(day => (
          <DayRow key={day}>
            <DayCell>
              <DayName>{formatDate(day)}</DayName>
            </DayCell>
            
            <MealCell>
              {getMealForDayAndType(day, 'breakfast') ? (
                <MealCard>
                  <MealImage 
                    src={getMealForDayAndType(day, 'breakfast').strMealThumb} 
                    alt={getMealForDayAndType(day, 'breakfast').strMeal} 
                  />
                  <MealInfo>
                    <MealName to={`/recipe/${getMealForDayAndType(day, 'breakfast').idMeal}`}>
                      {getMealForDayAndType(day, 'breakfast').strMeal}
                    </MealName>
                    <MealActions>
                      <RemoveButton onClick={() => handleRemoveMeal(day, 'breakfast')}>
                        <FaTrash />
                      </RemoveButton>
                    </MealActions>
                  </MealInfo>
                </MealCard>
              ) : (
                <AddMealButton onClick={() => handleAddMeal(day, 'breakfast')}>
                  <FaPlus />
                  <span>Add Breakfast</span>
                </AddMealButton>
              )}
            </MealCell>
            
            <MealCell>
              {getMealForDayAndType(day, 'lunch') ? (
                <MealCard>
                  <MealImage 
                    src={getMealForDayAndType(day, 'lunch').strMealThumb} 
                    alt={getMealForDayAndType(day, 'lunch').strMeal} 
                  />
                  <MealInfo>
                    <MealName to={`/recipe/${getMealForDayAndType(day, 'lunch').idMeal}`}>
                      {getMealForDayAndType(day, 'lunch').strMeal}
                    </MealName>
                    <MealActions>
                      <RemoveButton onClick={() => handleRemoveMeal(day, 'lunch')}>
                        <FaTrash />
                      </RemoveButton>
                    </MealActions>
                  </MealInfo>
                </MealCard>
              ) : (
                <AddMealButton onClick={() => handleAddMeal(day, 'lunch')}>
                  <FaPlus />
                  <span>Add Lunch</span>
                </AddMealButton>
              )}
            </MealCell>
            
            <MealCell>
              {getMealForDayAndType(day, 'dinner') ? (
                <MealCard>
                  <MealImage 
                    src={getMealForDayAndType(day, 'dinner').strMealThumb} 
                    alt={getMealForDayAndType(day, 'dinner').strMeal} 
                  />
                  <MealInfo>
                    <MealName to={`/recipe/${getMealForDayAndType(day, 'dinner').idMeal}`}>
                      {getMealForDayAndType(day, 'dinner').strMeal}
                    </MealName>
                    <MealActions>
                      <RemoveButton onClick={() => handleRemoveMeal(day, 'dinner')}>
                        <FaTrash />
                      </RemoveButton>
                    </MealActions>
                  </MealInfo>
                </MealCard>
              ) : (
                <AddMealButton onClick={() => handleAddMeal(day, 'dinner')}>
                  <FaPlus />
                  <span>Add Dinner</span>
                </AddMealButton>
              )}
            </MealCell>
          </DayRow>
        ))}
      </PlannerContainer>
      
      {mealPlan.length > 0 && (
        <ClearPlanButton onClick={handleClearMealPlan}>
          Clear Meal Plan
        </ClearPlanButton>
      )}
      
      {mealPlan.length === 0 && (
        <EmptyState>
          <EmptyIcon>
            <FaUtensils />
          </EmptyIcon>
          <EmptyTitle>Your Meal Plan is Empty</EmptyTitle>
          <EmptyMessage>
            Start planning your meals by clicking the "Add" buttons above.
          </EmptyMessage>
        </EmptyState>
      )}
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 600px;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const CalendarIcon = styled.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`;

const WeekNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const WeekButton = styled.button`
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const CurrentWeek = styled.div`
  font-weight: 600;
  color: var(--color-text);
`;

const PlannerContainer = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
  }
`;

const MealTypeHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const DayRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
`;

const DayCell = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  @media (max-width: 768px) {
    background-color: var(--color-primary);
    color: white;
    justify-content: flex-start;
  }
`;

const DayName = styled.span`
  @media (max-width: 768px) {
    &:before {
      content: 'Day: ';
      font-weight: 400;
    }
  }
`;

const MealCell = styled.div`
  padding: 1rem;
  border-left: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid var(--color-border);
    
    &:before {
      content: attr(data-meal-type);
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--color-text-light);
    }
  }
`;

const MealCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MealImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  object-fit: cover;
`;

const MealInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MealName = styled(Link)`
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;

const MealActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-error);
  }
`;

const AddMealButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-light);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

const ClearPlanButton = styled.button`
  background-color: var(--color-error);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  margin-top: 1rem;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-top: 2rem;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`;

const EmptyTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  max-width: 500px;
`;

export default MealPlannerPage;
