import { NextUIProvider } from '@nextui-org/react';
import { Header } from './components/Header';
import { PizzaForm } from './forms/PizzaForm';
import { useTheme } from './hooks/useTheme'

function App() {
  const {theme, setTheme } = useTheme();

  return (
    <NextUIProvider theme={theme}>
      <Header onThemeChange={setTheme}/>
      <PizzaForm />
    </NextUIProvider>
  );
}

export default App;