import { Grid, Radio, SimpleColors, Text, TextProps } from "@nextui-org/react"
import { RadioProps } from "@nextui-org/react/esm/radio/radio";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form"

import { FormOption } from "../../types";

export type FormRadioProps = {
  name: string;
  label: string;
  options: FormOption<SimpleColors>[];
  rules?: RegisterOptions;
  color?: SimpleColors
  radioProps?: Partial<RadioProps>;
  labelProps?: Partial<TextProps>
}

export const FormRadio = (props: FormRadioProps) => {
  const { options, name, rules, label, radioProps, labelProps, color } = props;
  const formContext = useFormContext()
  return (
    <Controller
      name={name}
      rules={rules}
      control={formContext.control}
      render={({ field, fieldState: { error } }) => (
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
            <Radio.Group onChange={field.onChange}>
              {options.map(({label, ...optionProps}) => (
                <Radio
                  {...radioProps}
                  {...optionProps}
                  key={optionProps.value}
                  color={color || radioProps?.color || optionProps.color}
                >
                  {label}
                </Radio>
              ))}
            </Radio.Group>
          </Grid>
        </Grid.Container>
      )}
    />
  )
};

export default FormRadio;