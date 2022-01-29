import { SimpleColors, Switch, Text, SwitchProps, TextProps } from "@nextui-org/react"
import { Controller, RegisterOptions, useFormContext } from "react-hook-form"

export type FormSwitchProps = {
  name: string;
  label: string;
  rules?: RegisterOptions;
  color?: SimpleColors;
  switchProps?: Partial<SwitchProps>;
  labelProps?: Partial<TextProps>;
} & Partial<SwitchProps>

export const FormSwitch = (props: FormSwitchProps) => {
  const { name, label, rules, color, switchProps, labelProps } = props

  const formContext = useFormContext();

  return (
    <Controller
      name={name}
      control={formContext.control}
      rules={rules}
      render={({ field }) => (
        <>
          <Text size={25} { ...labelProps} color={color} >
            {label}
          </Text>
          <Switch
            {...switchProps}
            onChange={(event) => field.onChange(event.target.checked)}
            color={color || switchProps?.color}
          />
        </>
      )}
    />
  )
};

export default FormSwitch