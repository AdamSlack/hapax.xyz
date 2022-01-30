import { NextUIProvider } from '@nextui-org/react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme'

import './App.css'
import { navLinks } from './consts/NavLinks';
import { HomePage, NextUIRHFDemoPage } from './pages';
import { CodeDemoPage } from './pages/CodeDemoPage';

function App() {
  const {theme, setTheme } = useTheme();

  return (
    <NextUIProvider theme={theme}>
      <Header onThemeChange={setTheme}/>
      <div className="content">
        <Routes>
          {
            navLinks.map(({ path, element}) => (
              <Route path={path} element={element} key={path} />
            ))
          }
          <Route path='/' element={<HomePage />} />
          <Route path='/blog/next-ui-react-hook-form' element={<NextUIRHFDemoPage />} />
          <Route path='/blog/code-blog-demo' element={<CodeDemoPage />} />
        </Routes>
        </div>
      <Footer />
    </NextUIProvider>
  );
}

export default App;