import { Avatar, Card, Grid, Text, Link, Divider } from "@nextui-org/react";
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { GITHUB_URL, TWITTER_URL, LINKEDIN_URL } from '../../consts/links';

const socials = [
  { text: 'LinkedIn', Icon: SiLinkedin, size: 35, link: LINKEDIN_URL },
  { text: 'Twitter', Icon: SiTwitter, size: 40, link: TWITTER_URL },
  { text: 'GitHub', Icon: SiGithub, size: 40, link: GITHUB_URL },
]

export const Footer = () => {
  return (
    <footer>
        <Divider />
        <Grid.Container justify='space-evenly' gap={4}>
          <Grid>
            <Avatar.Group>
              {socials.map(({text, Icon, link, size}, index) => (
                <Avatar 
                  key={text}
                  size="lg"
                  pointer
                  text={text}
                  stacked={index !== socials.length - 1}
                  squared
                  bordered 
                  color="gradient"
                  icon={<Link href={link} target='_blank'><Icon size={size} color='#eeeeee'/></Link>}
                />
              ))}
            </Avatar.Group>
          </Grid>
          <Grid>
            <Text size={15} >
              Hapax Ltd © 2022
            </Text>
          </Grid>
        </Grid.Container>
    </footer>
  )
}

export default Footer;