import { Button, Grid, Collapse, SimpleColors, Text, Spacer } from "@nextui-org/react";
import { FormProvider, RegisterOptions, useForm } from "react-hook-form";
import { FormCheckbox } from "../../components/FormCheckbox";
import { FormInput } from "../../components/FormInput";
import { FormRadio } from "../../components/FormRadio";
import { FormSwitch } from "../../components/FormSwitch";
import { FormTextArea } from "../../components/FormTextArea";
import { JsonDisplay } from "../../components/JsonDisplay";
import { ModalContent, useModal } from "../../hooks";
import { useInputStyles } from "../../hooks/useInputStyles/useInputStyles";
import MainLayout from "../../Layouts/MainLayout";
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

export const NextUIRHFDemoPage = () => {
  const formContext = useForm({ shouldUnregister: true });
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
    <MainLayout>
      <Grid>
        <Modal />
      </Grid>
        
      <Grid xs={12}>
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
      </Grid>
      
      <Grid xs={12}>
        <FormProvider {...formContext}>
          <form onSubmit={formContext.handleSubmit(onSubmit)}>
            <Grid.Container gap={1}>
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

              <Spacer y={2} />

              <Grid xs={12}>
                <Text size={40}>Pizza</Text>
              </Grid>
              <Grid xs={6}>
                <FormCheckbox options={toppingOptions} name='toppings' label="Toppings" />
              </Grid>
              <Grid xs={6}>
                <FormRadio options={baseOptions} name="toppings-radio" rules={requiredRule} label='Base Style' />
              </Grid>

              <Spacer y={2} />

              <Grid xs={12}>
                <FormSwitch name="additional.yes" label="Additional Info?" switchProps={{bordered: true, color: 'success'}}/>
              </Grid>

              <Grid xs={12}>
                { formContext.watch('additional.yes') && <FormTextArea name="additional.info" label="Additional Information" rules={requiredRule} fullWidth /> }
              </Grid>
            
              <Spacer y={2} />


              <Grid xs={12}>
                <Button
                  type="submit" 
                  color={inputStyles.color}
                  disabled={!!Object.keys(formContext.formState.errors).length}
                >
                  Submit
                </Button>
              </Grid>
            </Grid.Container>
          </form>
        </FormProvider>
      </Grid>
    </MainLayout>
  )
}

export default NextUIRHFDemoPage;