import { NextUIProvider } from '@nextui-org/react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme'
import { NextUIRHFDemoPage, HomePage } from './pages';

import './App.css'

function App() {
  const {theme, setTheme } = useTheme();

  return (
    <NextUIProvider theme={theme}>
      <Header onThemeChange={setTheme}/>
      <div className="content">
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/home' element={<HomePage />} /> 
          <Route path='/next-ui-react-hook-form-demo' element={<NextUIRHFDemoPage />} /> 
        </Routes>
        </div>
      <Footer />
    </NextUIProvider>
  );
}

export default App;