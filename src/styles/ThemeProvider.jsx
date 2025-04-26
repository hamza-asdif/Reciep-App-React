import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, setTheme } from '../redux/slices/userSlice';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme function that can be used by components
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  // Provide theme context to children
  return (
    <div className={`theme-${theme}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
