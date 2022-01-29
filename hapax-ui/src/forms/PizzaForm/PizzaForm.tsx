import { Button, Grid, SimpleColors, Text } from "@nextui-org/react";
import { useState } from "react";
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

const useInputStyles = () => {
  const [color, setColor] = useState<SimpleColors>()
  const clearColor = () => setColor(undefined)

  const [inputStyle, setInputStyle] = useState<'bordered' | 'underlined' | 'rounded'>()
  const clearInputStyle = () => setInputStyle(undefined)

  const [fillStyle, setFillStyle] = useState<SimpleColors>();
  const clearFillStyle = () => setFillStyle(undefined);

  const [shadow, setShadow] = useState<boolean>(false);

  return {
    setColor,
    clearColor,
    setInputStyle,
    clearInputStyle,
    setShadow,
    setFillStyle,
    clearFillStyle,
    inputStyle,
    color,
    shadow,
    fillStyle,
    inputStyles: {
      color,
      ...(inputStyle && { [inputStyle]: true}),
      shadow,
      status: fillStyle
    }
  }
}

export const PizzaForm = () => {
  const formContext = useForm();
  const onSubmit = (data: any) => console.log(data);

  const { inputStyles, setInputStyle, inputStyle, setColor, color, setFillStyle, fillStyle } = useInputStyles();

  return (
    <>
    
    <Grid.Container alignContent="center">
      <Grid>
        <Button.Group>
          <Button onClick={() => setInputStyle(undefined)} disabled={!inputStyle}>Simple</Button>
          <Button onClick={() => setInputStyle('bordered')} disabled={inputStyle === 'bordered'}>Bordered</Button>
          <Button onClick={() => setInputStyle('rounded')} disabled={inputStyle === 'rounded'}>Rounded</Button>
          <Button onClick={() => setInputStyle('underlined')} disabled={inputStyle === 'underlined'}>Underlined</Button>
        </Button.Group>
      </Grid>

      <Grid>
          <Button.Group>
          <Button onClick={() => setColor(undefined)} disabled={!color}>Default</Button>
          <Button onClick={() => setColor('primary')} disabled={color === 'primary'}>Primary</Button>
          <Button onClick={() => setColor('secondary')} disabled={color === 'secondary'}>Secondary</Button>
          <Button onClick={() => setColor('success')} disabled={color === 'success'}>Success</Button>
          <Button onClick={() => setColor('warning')} disabled={color === 'warning'}>Warning</Button>
          <Button onClick={() => setColor('error')} disabled={color === 'error'}>Error</Button>
          </Button.Group>
      </Grid>

      <Grid>
          <Button.Group>
          <Button onClick={() => setFillStyle(undefined)} disabled={!fillStyle}>Default</Button>
          <Button onClick={() => setFillStyle('primary')} disabled={fillStyle === 'primary'}>Primary</Button>
          <Button onClick={() => setFillStyle('secondary')} disabled={fillStyle === 'secondary'}>Secondary</Button>
          <Button onClick={() => setFillStyle('success')} disabled={fillStyle === 'success'}>Success</Button>
          <Button onClick={() => setFillStyle('warning')} disabled={fillStyle === 'warning'}>Warning</Button>
          <Button onClick={() => setFillStyle('error')} disabled={fillStyle === 'error'}>Error</Button>
          </Button.Group>
      </Grid>
    </Grid.Container>

    <FormProvider {...formContext}>
      <form onSubmit={formContext.handleSubmit(onSubmit)}>
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <Text size={40}>Address</Text>
          </Grid>
          <Grid xs={12}>
            <FormInput label="Street" name="address.street" fullWidth rules={requiredRule} {...inputStyles} />
          </Grid>

          <Grid xs={12}>
            <FormInput label="Town" name="address.town" fullWidth rules={requiredRule} {...inputStyles} />
          </Grid>

          <Grid xs={12}>
            <FormInput label="City" name="address.city" fullWidth rules={requiredRule} {...inputStyles} />
          </Grid>

          <Grid xs={12}>
            <FormInput label="Postcode" name="address.postcode" fullWidth rules={requiredRule} {...inputStyles} />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4}> 
          <Grid xs={12}>
            <Text size={40}>Pizza</Text>
          </Grid>
          <Grid xs={6}>
            <FormCheckbox options={toppingOptions} name='toppings' label="Toppings" />
          </Grid>

          <Grid xs={6}>
            <FormRadio options={baseOptions} name="toppings-radio" rules={requiredRule} label='Base Style' />
          </Grid>
        </Grid.Container>


        <Grid.Container gap={4}> 
          <Grid xs={12}>
            <FormSwitch name="additional.yes" label="Additional Info?" switchProps={{bordered: true, color: 'success'}}/>
          </Grid>

          <Grid xs={12}>
            { formContext.watch('additional.yes') && <FormTextArea name="additional.info" label="Additional Information" rules={requiredRule} fullWidth /> }
          </Grid>
        </Grid.Container>
        
        <Grid.Container gap={4}>
          <Grid>
            <Button
              type="submit" 
              color='gradient'
              disabled={!formContext.formState.isValid}
            >
              Submit
            </Button>
          </Grid>
        </Grid.Container>

      </form>
    </FormProvider>
    </>
  )
}

export default PizzaForm;