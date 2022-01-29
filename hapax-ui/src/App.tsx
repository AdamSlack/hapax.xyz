import { NextUIProvider, Switch } from '@nextui-org/react';
import { BiSun, BiMoon } from 'react-icons/bi'
import { PizzaForm } from './forms/PizzaForm';
import { useTheme } from './hooks/useTheme'



function App() {
  const {theme, setTheme } = useTheme();

  return (
    <NextUIProvider theme={theme}>
      <Switch
        shadow 
        color='warning'
        size='lg'
        onChange={({target: { checked }}) => setTheme(checked ? 'light' : 'dark')}
        iconOn={<BiSun />}
        iconOff={<BiMoon />}
      />
      <PizzaForm />
    </NextUIProvider>
  );
}

export default App;