import { Input, InputProps } from "@nextui-org/react";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form"

export type FormInputProps = {
  name: string;
  rules?: RegisterOptions,
} & Partial<InputProps>;

export const FormInput = (props: FormInputProps) => {
  const { name, label, rules, ...inputProps } = props;

  const formContext = useFormContext();

  return (
    <Controller 
      control={formContext.control}
      name={name}
      rules={rules}
      render={({field}) => (
        <Input
          onChange={field.onChange}
          labelPlaceholder={label}
          {...inputProps}
        />
      )}   
    />
  )
}

export default FormInput;