import { Button, Grid, SimpleColors } from "@nextui-org/react";
import { FormProvider, RegisterOptions, useForm } from "react-hook-form";
import { FormCheckbox } from "../../components/FormCheckbox";
import { FormInput } from "../../components/FormInput";
import { FormRadio } from "../../components/FormRadio";
import { FormSwitch } from "../../components/FormSwitch";
import { FormTextArea } from "../../components/FormTextArea";
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

const requiredRule: Pick<RegisterOptions, 'required'> = { required: true };
export const PizzaForm = () => {
  const formContext = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...formContext}>
      <form onSubmit={formContext.handleSubmit(onSubmit)}>
        
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <FormInput
              label="Street"
              name="address.street"
              bordered
              fullWidth
              rules={requiredRule}
            />
          </Grid>

          <Grid xs={12}>
            <FormInput
              label="Town"
              name="address.town"
              status="secondary"
              fullWidth
              rules={requiredRule}
            />
          </Grid>

          <Grid xs={12}>
            <FormInput
              label="City"
              name="address.city"
              underlined
              color="warning"
              fullWidth
              rules={requiredRule}
            />
          </Grid>

          <Grid xs={12}>
            <FormInput
              label="Postcode"
              name="address.postcode"
              rounded
              bordered
              color="success"
              fullWidth
              rules={requiredRule}
            />
          </Grid>
          
          <Grid xs={6}>
            <FormCheckbox
            options={toppingOptions}
            name='toppings'
            label="Toppings"
            rules={requiredRule}
          />
          </Grid>

          <Grid xs={6}>
            <FormRadio
              options={baseOptions}
              name="toppings-radio"
              rules={requiredRule}
              label='Base Style'
            />
          </Grid>

          <Grid xs={12}>
            <FormSwitch
              name="additional.yes"
              label="Additional Info?"
              switchProps={{bordered: true, color: 'success'}}
            />
          </Grid>

          <Grid xs={12}>
            { formContext.watch('additional.yes') && <FormTextArea
              name="additional.info"
              label="Additional Information"
              rules={requiredRule}
              fullWidth
            /> }
          </Grid>

        </Grid.Container>
          <Grid>
            <Button
              type="submit" 
              disabled={!formContext.formState.isValid || formContext.formState.isSubmitting}
            >
              Submit
            </Button>
          </Grid>
      </form>
    </FormProvider>
  )
}

export default PizzaForm;