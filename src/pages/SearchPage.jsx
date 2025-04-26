import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useRecipes from '../hooks/useRecipes';

const SearchPage = () => {
  const [params] = useSearchParams();
  const type = params.get('type') || 'name';
  const query = params.get('query') || '';
  const { searchByName, searchByIngredient, searchResults, status, error } = useRecipes();

  useEffect(() => {
    if (!query) return;
    if (type === 'name') searchByName(query);
    else if (type === 'ingredient') searchByIngredient(query);
  }, [type, query, searchByName, searchByIngredient]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Title>Search Results for “{query}”</Title>

      {status === 'loading' ? (
        <Message>Loading...</Message>
      ) : error ? (
        <Message>Error loading results</Message>
      ) : searchResults.length === 0 ? (
        <Message>No results found</Message>
      ) : (
        <Grid>
          {searchResults.map((recipe) => (
            <Card key={recipe.idMeal} whileHover={{ scale: 1.02 }}>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
                <Name>{recipe.strMeal}</Name>
              </Link>
            </Card>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchPage;

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const Title = styled.h2`
  margin-bottom: 1rem;
`;
const Message = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;
const Card = styled(motion.div)`
  background: var(--color-card-bg);
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const Name = styled.div`
  padding: 0.5rem;
  font-weight: 500;
  text-align: center;
`;
