import { Button, Grid, SimpleColors } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import { FormCheckbox } from "../../components/FormCheckbox";
import { FormInput } from "../../components/FormInput";
import { FormRadio } from "../../components/FormRadio";
import { FormSwitch } from "../../components/FormSwitch";
import { FormOption } from "../../types";

const toppingOptions: FormOption<SimpleColors>[] = [
  {label: 'Pepperoni', value: 'pepperoni'},
  {label: 'Cheese', value: 'Cheese'},
  {label: 'Chorizo', value: 'Chorizo'},
  {label: 'Sausage', value: 'Sausage'},
]

const baseOptions: FormOption<SimpleColors>[] = [
  {label: 'Deep Pan', value: 'deep-pan'},
  {label: 'Chicago Style', value: 'chicago-style'},
  {label: 'Sourdough', value: 'sourdough'},
  {label: 'Stonebaked', value: 'stonebaked'},
]

export const PizzaForm = () => {
  const formContext = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...formContext}>
      <form onSubmit={formContext.handleSubmit(onSubmit)}>
        
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <FormInput label="Street" name="address.street" bordered fullWidth/>
          </Grid>
          <Grid xs={12}>
            <FormInput label="Town" name="address.town" status="secondary" fullWidth />
          </Grid>
          <Grid xs={12}>
            <FormInput label="City" name="address.city" underlined color="warning" fullWidth />
          </Grid>
          <Grid xs={12}>
            <FormInput label="Postcode" name="address.postcode" rounded bordered color="success" fullWidth />
          </Grid>
          
          <Grid>
            <FormCheckbox options={toppingOptions} name='toppings' label="Toppings"/>
          </Grid>

          <Grid>
            <FormSwitch name="allergies.yes" label="Allergies?" switchProps={{bordered: true, color: 'success'}}/>
          </Grid>

          <Grid>
            <FormRadio options={baseOptions} name="toppings-radio" rules={{ required: true }} label='Base Style'/>
          </Grid>

        </Grid.Container>
          <Grid>
            <Button type="submit">Submit</Button>
          </Grid>
      </form>
    </FormProvider>
  )
}

export default PizzaForm;