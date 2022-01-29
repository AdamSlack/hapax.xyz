import { Grid, Spacer, Text } from "@nextui-org/react"

const orangeCssGradient = {
  textGradient: '45deg, $yellow500 -20%, $red500 100%'
}


const purpleCssGradient = {
  textGradient: '45deg, $purple500 -20%, $pink500 100%'
}

const greenCssGradient = {
  textGradient: '45deg, $green500 20%, $yellow500 100%'
}

export const HomePage = () => {
  return (
    <>
      <Grid.Container gap={4}>
        <Grid xs={0} sm={0} md={2} lg={2} xl={3}>
          <Spacer />
        </Grid>
        <Grid>
          <Text
            size={60}
          >
            <Text size={60} small css={orangeCssGradient}>Full stack</Text> engineering
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={4} justify='flex-end'>
        <Grid>
          <Text size={60}>
            <Text size={60} small css={purpleCssGradient}>End-to-end</Text> business needs
          </Text>
        </Grid>
        <Grid xs={0} sm={0} md={2} lg={2} xl={3}>
          <Spacer />
        </Grid>
      </Grid.Container>
    </>
  )
};

export default HomePage;