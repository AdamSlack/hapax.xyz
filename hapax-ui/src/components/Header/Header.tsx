import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link, Switch, SwitchEvent, Text, Divider, Collapse } from '@nextui-org/react';
import { BiSun, BiMoon, BiMenu } from 'react-icons/bi'

import { SetTheme } from "../../hooks/useTheme";
import { ModalContent, useModal } from '../../hooks';
import { navLinks } from '../../consts/NavLinks';

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

  const modalContent: ModalContent = {
    menu: () => (
      <Collapse.Group>
        {navLinks.map(({text, path, Icon}) => (
          <div key={`menu-${text}`}>
            <Divider />
            <RouterLink to={path} onClick={closeModal}><Collapse title={text} arrowIcon={<Text size={25}><Icon /></Text>}/></RouterLink>
          </div>
        ))}
      </Collapse.Group>
    )
  }

  const { setSelectedModal, Modal, closeModal } = useModal(modalContent);

  return (
    <nav>
      <Modal />
      <Grid.Container justify='space-between' gap={1} alignItems='baseline'>
        <Grid xs={3}>
          <RouterLink to='/'>
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
        
        <Grid xs={9}>
          <Grid.Container justify='flex-end' gap={1} alignItems='center'>
            {
              navLinks.map(({ path, text }) => (
                <Grid xs={0} sm={1.2} md={1} lg={0.9} xl={0.6} key={`nav-${text}`}>
                  <RouterLink to={path}><Text>{text}</Text></RouterLink>
                </Grid>
              ))
            }
            <Grid>
              <Switch
                color='warning'
                size='lg'
                onChange={handleThemeChange}
                iconOn={<BiSun />}
                iconOff={<BiMoon />}
                css={{
                  color: '$pink600',
                  '[data-state="checked"]': {
                    background: `linear-gradient(${GRID_TEXT_GRADIENT})`,
                  },
                  '[data-state="checked"]:hover': {
                    background: `linear-gradient(${GRID_TEXT_HOVER_GRADIENT}) !important`
                  }
                }}
              />
            </Grid>
            <Grid sm={0}>
              <Link >
                <Text size={25} onClick={() => setSelectedModal('menu')}>
                  <BiMenu />
                </Text>
              </Link>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
      <Divider />
    </nav>
  )
}

export default Header;