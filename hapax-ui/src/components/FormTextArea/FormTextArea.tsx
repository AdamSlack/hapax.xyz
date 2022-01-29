import { Grid, Textarea } from "@nextui-org/react";
import { TextareaProps } from "@nextui-org/react/esm/textarea";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form"

export type FormTextAreaProps = {
  name: string;
  rules?: RegisterOptions,
} & Partial<TextareaProps>;

export const FormTextArea = (props: FormTextAreaProps) => {
  const { name, label, rules, ...inputProps } = props;

  const formContext = useFormContext();  
  
  return (
    <Controller 
      control={formContext.control}
      name={name}
      rules={rules}
      render={({field, fieldState: { error } }) => (
        <Grid.Container>
          <Grid xs={12}>
            <Textarea
              onChange={field.onChange}
              labelPlaceholder={!error ? label : `${label} ${error.type}`}
              {...inputProps}
              status={!error ? inputProps.status: 'error'}
            />
          </Grid>
        </Grid.Container>
      )}   
    />
  )
}

export default FormTextArea;