import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPlus, FaTrash, FaUtensils } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectMealPlan, removeFromMealPlan, clearMealPlan } from '../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { openMealPlanModal } from '../redux/slices/uiSlice';

// Helpers for week calculation
const getMonday = (date = new Date()) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

const getWeekDates = (start) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
};

const MealPlannerPage = () => {
  const dispatch = useDispatch();
  const mealPlan = useSelector(selectMealPlan);
  const [weekStart, setWeekStart] = useState(getMonday());
  const weekDates = getWeekDates(weekStart);

  const prevWeek = () => setWeekStart(s => { const d = new Date(s); d.setDate(d.getDate() - 7); return d; });
  const nextWeek = () => setWeekStart(s => { const d = new Date(s); d.setDate(d.getDate() + 7); return d; });

  const formatDate = (str) => {
    const d = new Date(str);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getMeal = (day, type) => {
    const p = mealPlan.find(m => m.day === day);
    return p ? p[type] : null;
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header>
        <Title><FaCalendarAlt /> Meal Planner</Title>
        <Nav>
          <NavButton onClick={prevWeek}>Previous</NavButton>
          <Range>{formatDate(weekDates[0])} - {formatDate(weekDates[6])}</Range>
          <NavButton onClick={nextWeek}>Next</NavButton>
        </Nav>
      </Header>
      <Planner>
        <HeaderRow>
          <CellHeader>Date</CellHeader>
          <CellHeader>Breakfast</CellHeader>
          <CellHeader>Lunch</CellHeader>
          <CellHeader>Dinner</CellHeader>
        </HeaderRow>
        {weekDates.map(day => (
          <Row key={day}>
            <Cell>{formatDate(day)}</Cell>
            {['breakfast', 'lunch', 'dinner'].map(type => {
              const meal = getMeal(day, type);
              return (
                <MealCell key={type}>
                  {meal ? (
                    <Card>
                      <Image src={meal.image || meal.strMealThumb} alt={meal.name || meal.strMeal} />
                      <Info>
                        <LinkStyled to={`/recipe/${meal.id || meal.idMeal}`}>{meal.name || meal.strMeal}</LinkStyled>
                        <Trash onClick={() => dispatch(removeFromMealPlan({ day, meal: type }))}>
                          <FaTrash />
                        </Trash>
                      </Info>
                    </Card>
                  ) : (
                    <Add onClick={() => dispatch(openMealPlanModal({ day, mealType: type }))}>
                      <FaPlus /> Add {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Add>
                  )}
                </MealCell>
              );
            })}
          </Row>
        ))}
      </Planner>
      {mealPlan.length > 0 ? (
        <Clear onClick={() => { if (window.confirm('Clear entire plan?')) dispatch(clearMealPlan()); }}>
          Clear Plan
        </Clear>
      ) : (
        <Empty>
          <FaUtensils size={48} />
          <EmptyMsg>Your meal plan is empty. Click Add to create one.</EmptyMsg>
        </Empty>
      )}
    </Container>
  );
};

export default MealPlannerPage;

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover { background: var(--color-border); }
`;

const Range = styled.span`
  font-weight: 600;
`;

const Planner = styled.div`
  background: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 1fr);
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const CellHeader = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 1fr);
  border-top: 1px solid var(--color-border);
  &:nth-child(even) { background: var(--color-background); }
`;

const Cell = styled.div`
  padding: 1rem;
  text-align: center;
`;

const MealCell = styled(Cell)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  min-height: 120px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-background-light);
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
  width: 100%;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  overflow: hidden;
`;

const LinkStyled = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover { color: var(--color-primary); }
`;

const Trash = styled.button`
  background: none;
  border: none;
  color: var(--color-error);
  cursor: pointer;
`;

const Add = styled.button`
  background: var(--color-background-light);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-text-light);
  transition: background-color var(--transition-fast);
  &:hover { background: var(--color-border); color: #fff; }
`;

const Clear = styled.button`
  margin-top: 1.5rem;
  align-self: center;
  background: var(--color-error);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  &:hover { background: #d32f2f; }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  gap: 0.75rem;
`;

const EmptyMsg = styled.div`
  color: var(--color-text-light);
  font-size: 1rem;
`;
