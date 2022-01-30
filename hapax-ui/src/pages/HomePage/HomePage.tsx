import { Grid, Text } from "@nextui-org/react"
import MainLayout from "../../Layouts/MainLayout"

const orangeCssGradient = {
  textGradient: '45deg, $yellow500 -20%, $red500 100%'
}


const purpleCssGradient = {
  textGradient: '45deg, $purple500 -20%, $pink500 100%'
}

// const greenCssGradient = {
//   textGradient: '45deg, $green500 20%, $yellow500 100%'
// }

export const HomePage = () => {
  return (
    <MainLayout>
      <Grid xs={12}>
        <Text size={60}>
          <Text size={60} span css={orangeCssGradient} >Full stack</Text> engineering
        </Text>
      </Grid>
      <Grid xs={12}>
        <Text size={60}>
          <Text size={60} span css={purpleCssGradient}>End-to-end</Text> solutions
        </Text>
      </Grid>
    </MainLayout>
  )
};

export default HomePage;