import { Grid, Link, Switch, SwitchEvent, Text } from '@nextui-org/react';
import { BiSun, BiMoon } from 'react-icons/bi'

import { SetTheme } from "../../hooks/useTheme";

export type HeaderProps = {
  onThemeChange: SetTheme
}

export const GRID_TEXT_GRADIENT = '45deg, #AAFFEC -77%, #ff4ecd 20%, #0070F3 120%';
export const TEXT_GRADIENT = '90deg, #AAFFEC -20%, #ff4ecd 0%, #0070F3 20%';

export const Header = (props: HeaderProps) => {
  const { onThemeChange } = props

  const handleThemeChange = (event: SwitchEvent) => {
    const { target: { checked }} = event;
    onThemeChange(checked ? 'light' : 'dark')
  }

  return (
    <nav>
      <Grid.Container justify='space-between' gap={1} alignItems='center'>
        <Grid>
          <Link>
            <Text
              h1
              size={40}
              css={{
                textGradient: GRID_TEXT_GRADIENT,
              }}
            >
              Hapax.xyz
            </Text>
          </Link>
        </Grid>
        <Grid>
          <Switch
            shadow 
            color='warning'
            size='lg'
            onChange={handleThemeChange}
            iconOn={<BiSun />}
            iconOff={<BiMoon />}
          />
        </Grid>
      </Grid.Container>
    </nav>
  )
}

export default Header;