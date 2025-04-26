import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  FaSearch,
  FaHeart,
  FaCalendarAlt,
  FaUser,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";
import { toggleSidebar } from "../../redux/slices/uiSlice";
import { selectTheme, setTheme } from "../../redux/slices/userSlice";
import { openSearchModal } from "../../redux/slices/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleOpenSearch = () => {
    dispatch(openSearchModal());
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <MenuButton onClick={handleToggleSidebar}>
            <FaBars />
          </MenuButton>
          <Link to="/">
            <Logo>
              <span className="primary">Tasty</span>Recipes
            </Logo>
          </Link>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/popular">Popular</NavLink>
          <NavLink to="/latest">Latest</NavLink>
        </NavLinks>

        <ActionButtons>
          <IconButton onClick={handleOpenSearch} aria-label="Search recipes">
            <FaSearch />
          </IconButton>
          <IconButton
            onClick={() => navigate("/favorites")}
            aria-label="Favorite recipes"
          >
            <FaHeart />
          </IconButton>
          <IconButton
            onClick={() => navigate("/meal-planner")}
            aria-label="Meal planner"
          >
            <FaCalendarAlt />
          </IconButton>
          <IconButton
            onClick={() => navigate("/profile")}
            aria-label="User profile"
          >
            <FaUser />
          </IconButton>
          <IconButton onClick={handleToggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </IconButton>
        </ActionButtons>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: var(--color-card-bg);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color var(--transition-normal);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);

  .primary {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-text);
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-normal);
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background-color: var(--color-primary-light);
    color: white;
  }
`;

export default Header;
