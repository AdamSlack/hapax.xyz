import { Button, Grid, Collapse, SimpleColors, Text } from "@nextui-org/react";
import { FormProvider, RegisterOptions, useForm } from "react-hook-form";
import { FormCheckbox } from "../../components/FormCheckbox";
import { FormInput } from "../../components/FormInput";
import { FormRadio } from "../../components/FormRadio";
import { FormSwitch } from "../../components/FormSwitch";
import { FormTextArea } from "../../components/FormTextArea";
import { JsonDisplay } from "../../components/JsonDisplay";
import { ModalContent, useModal } from "../../hooks";
import { useInputStyles } from "../../hooks/useInputStyles/useInputStyles";
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

export const NextUIRHFDemoForm = () => {
  const formContext = useForm();
  const onSubmit = (data: any) => console.log(data);

  
  const modalContent: ModalContent = {
    state: () => (<JsonDisplay jsonData={formContext.watch()}/>),
    errors:() => (<JsonDisplay jsonData={formContext.formState.errors}/>),
    dirty:() => (<JsonDisplay jsonData={formContext.formState.dirtyFields}/>),
  }

  const { setSelectedModal, Modal } = useModal(modalContent)
  
  const {
    inputStyles,
    StyleButtonGroup,
    ColorButtonGroup,
    StatusButtonGroup
   } = useInputStyles();

  return (
    <>
      <Modal />
      <Collapse.Group>
        <Collapse title='Change Styles'>
          <Grid.Container alignContent="center" gap={2}>
            <Grid>
              <Text size={25}>Style <Text small color='grey'>Change the shape of the input</Text></Text>
            </Grid>
            <Grid xs={12} alignItems='center'>
              <StyleButtonGroup />
            </Grid>

            <Grid>
              <Text size={25}>Colour <Text small color='grey'>change the active colours for borders and text</Text></Text>
            </Grid>
            <Grid xs={12} alignItems='center'>
              <ColorButtonGroup />
            </Grid>

            <Grid>
              <Text size={25}>Status <Text small color='grey'>apply a coloured status</Text></Text>
            </Grid>
            <Grid xs={12} alignItems='center'>
              <StatusButtonGroup />
            </Grid>
          </Grid.Container>
        </Collapse>
        <Collapse title='View State'>
          <Grid.Container alignContent="center" gap={2}>
            {Object.keys(modalContent).map((modal) => (
              <Grid key={modal}>
                <Button color={inputStyles.color} onClick={() => setSelectedModal(modal)}>{modal}</Button>
              </Grid>
            ))}
          </Grid.Container>
        </Collapse>
      </Collapse.Group>
      <FormProvider {...formContext}>
        <form onSubmit={formContext.handleSubmit(onSubmit)}>
          <Grid.Container gap={4} justify='space-around'>
            <Grid xs={9}>
              <Text size={40}>Address</Text>
            </Grid>
            <Grid xs={9}>
              <FormInput label="Street" name="address.street" fullWidth rules={requiredRule} {...inputStyles} />
            </Grid>
            <Grid xs={9}>
              <FormInput label="Town" name="address.town" fullWidth rules={requiredRule} {...inputStyles} />
            </Grid>
            <Grid xs={9}>
              <FormInput label="City" name="address.city" fullWidth rules={requiredRule} {...inputStyles} />
            </Grid>
            <Grid xs={9}>
              <FormInput label="Postcode" name="address.postcode" fullWidth rules={requiredRule} {...inputStyles} />
            </Grid>
          </Grid.Container>

          <Grid.Container gap={4} justify='space-around'>
            <Grid xs={9}>
              <Text size={40}>Pizza</Text>
            </Grid>
            </Grid.Container>
          <Grid.Container gap={4} justify='space-around'>

            <Grid xs={3}>
              <FormCheckbox options={toppingOptions} name='toppings' label="Toppings" />
            </Grid>

            <Grid xs={3}>
              <FormRadio options={baseOptions} name="toppings-radio" rules={requiredRule} label='Base Style' />
            </Grid>
          </Grid.Container>


          <Grid.Container gap={4} justify='space-around'>
            <Grid xs={9}>
              <FormSwitch name="additional.yes" label="Additional Info?" switchProps={{bordered: true, color: 'success'}}/>
            </Grid>

            <Grid xs={9}>
              { formContext.watch('additional.yes') && <FormTextArea name="additional.info" label="Additional Information" rules={requiredRule} fullWidth /> }
            </Grid>
          </Grid.Container>
          
          <Grid.Container gap={4} justify='space-around'>
            <Grid xs={9}>
              <Button
                type="submit" 
                color={inputStyles.color}
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

export default NextUIRHFDemoForm;