import { Checkbox, CheckboxProps, Grid, NormalColors, Text, TextProps } from "@nextui-org/react"
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { FormOption } from "../../types/FormOption"

export type FormCheckboxProps = {
  name: string;
  options: FormOption[];
  label: string;
  rules?: RegisterOptions;
  color?: NormalColors
  labelProps?: TextProps,
  checkboxProps?: Partial<CheckboxProps>
}

export const FormCheckbox = (props: FormCheckboxProps) => {
  const { options, name, rules, color, labelProps, label, checkboxProps } = props;

  const formContext = useFormContext();

  return (
    <Controller
      name={name}
      rules={rules}
      control={formContext.control}
      render={({ field, fieldState: { error }}) => (
        <Grid.Container>
          <Grid xs={12}>
          <Text
              size={25}
              { ...labelProps }
              color={!error ? (labelProps?.color || color) : 'error' }
            >
              {label}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Checkbox.Group value={[]} onChange={field.onChange}>
              {options.map(({label, ...optionProps}) => (
                <Checkbox
                  {...checkboxProps}
                  {...optionProps}
                  color={color || checkboxProps?.color || optionProps.color}
                  key={optionProps.value}
                >
                  {label
                }</Checkbox>
              ))}
            </Checkbox.Group>
          </Grid>
        </Grid.Container>
      )}
    />
  )
}