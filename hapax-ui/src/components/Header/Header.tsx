import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link, Switch, SwitchEvent, Text, Divider } from '@nextui-org/react';
import { BiSun, BiMoon } from 'react-icons/bi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

import { SetTheme } from "../../hooks/useTheme";
import { GITHUB_URL, LINKEDIN_URL } from '../../consts/links';

export type HeaderProps = {
  onThemeChange: SetTheme
}

export const GRID_TEXT_GRADIENT = '45deg, #AAFFEC -77%, #ff4ecd 20%, #0070F3 120%';
export const GRID_TEXT_HOVER_GRADIENT = '45deg, #88ddba -77%, #dd1ba9 20%, #0050d1 120%';
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
        <Grid md={9} sm={8} xs={6}>
          <RouterLink to='/home'>
            <Text
              weight='bold'
              size={40}
              css={{
                textGradient: GRID_TEXT_GRADIENT,
              }}
            >
              Hapax.xyz
            </Text>
          </RouterLink>
        </Grid>
        
        <Grid>
          <RouterLink to='/home'>
            <Text>Home</Text>
          </RouterLink>
        </Grid>
        <Grid>
          <RouterLink to='/next-ui-react-hook-form-demo'>
            <Text>NextUI + RHF</Text>
          </RouterLink>
        </Grid>
        <Grid>
          <Link href={LINKEDIN_URL} target='_blank'>
            <Text
              size={25}
            >
              <SiLinkedin/>
            </Text>
          </Link>
        </Grid>
        <Grid>
          <Link href={GITHUB_URL} target='_blank'>
            <Text
              size={25}
            >
              <SiGithub/>
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
            css={{
              color: '$pink600',
              '[data-state="checked"]': {
                // background: 'rgb(222,27,233)',
                background: `linear-gradient(${GRID_TEXT_GRADIENT})`,
              },
              '[data-state="checked"]:hover': {
                background: `linear-gradient(${GRID_TEXT_HOVER_GRADIENT}) !important`
              }
            }}
          />
        </Grid>
      </Grid.Container>
      <Divider />
    </nav>
  )
}

export default Header;