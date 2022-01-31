import { Grid } from "@nextui-org/react"

export type MainLayoutProps = {
  children?: React.ReactNode;
}
export const MainLayout = (props: MainLayoutProps) => {

  const { children } = props

  return (
    <Grid.Container gap={4} justify='center'>
      <Grid xs={12} sm={9} md={9} lg={7} xl={6}>
        <Grid.Container gap={1}>
          {children}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  )
}

export default MainLayout