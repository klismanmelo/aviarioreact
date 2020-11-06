import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import SignIn from './pages/Login';
import { AuthProvider } from './context/AuthContex';
import GlobolsStyle from './styles/globals';
// import Routes from './routes/app.routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobolsStyle />
  </>
);

export default App;
