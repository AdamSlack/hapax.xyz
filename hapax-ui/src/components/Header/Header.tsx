import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link, Switch, SwitchEvent, Text, Divider, Collapse } from '@nextui-org/react';
import { BiSun, BiMoon, BiMenu } from 'react-icons/bi'
import { SiGithub, SiLinkedin, } from 'react-icons/si'

import { SetTheme } from "../../hooks/useTheme";
import { GITHUB_URL, LINKEDIN_URL } from '../../consts/links';
import { ModalContent, useModal } from '../../hooks';

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
      // <Grid.Container gap={1}>
      //   <Divider />
      //   <Grid xs={9}>
      //     <RouterLink to='/home' onClick={closeModal}><Text>Home</Text></RouterLink>
      //   </Grid>
      //   <Divider />
      //   <Grid xs={9}>
      //     <RouterLink to='/next-ui-react-hook-form-demo' onClick={closeModal}><Text>NextUI + RHF</Text></RouterLink>
      //   </Grid>
      // </Grid.Container>
      <Collapse.Group >    
        <RouterLink to='/home' onClick={closeModal}><Collapse title='Home' arrowIcon={<></>}/></RouterLink>
        <Divider />
        <RouterLink to='/next-ui-react-hook-form-demo' onClick={closeModal}><Collapse title='NextUI + RHF' arrowIcon={<></>}/></RouterLink>

      </Collapse.Group>
    )
  }

  const { setSelectedModal, Modal, closeModal } = useModal(modalContent, { showTitle: false });

  return (
    <nav>
      <Modal />
      <Grid.Container justify='space-between' gap={1} alignItems='baseline'>
        <Grid xs={6}>
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
        
        <Grid xs={6}>
          <Grid.Container justify='flex-end' gap={1} alignItems='center'>
            <Grid xs={0} sm={2} md={1}>
              <RouterLink to='/home'>
                <Text>Home</Text>
              </RouterLink>
            </Grid>
            <Grid xs={0} sm={3} md={2} lg={2} xl={1.3}>
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