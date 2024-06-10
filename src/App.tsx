import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ExplorePage from './pages/ExplorePage';

//TODO:add route
const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <ExplorePage/>
    </ThemeProvider>
  );
};

export default App;
