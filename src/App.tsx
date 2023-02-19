import React from 'react';
import { useRoutes } from 'react-router-dom';
import { getRouters } from './core/route';

const App: React.FC = () => {
  const elements = useRoutes(getRouters())
  return elements
};

export default App;