import { SimpleColors, Switch, Text, SwitchProps, TextProps, Grid } from "@nextui-org/react"
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
        <Grid.Container>
          <Grid xs={12}>
            <Text size={25} { ...labelProps} color={color} span>
              {label}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Switch
              {...switchProps}
              onChange={(event) => field.onChange(event.target.checked)}
              color={color || switchProps?.color}
            />
          </Grid>
        </Grid.Container>
      )}
    />
  )
};

export default FormSwitch