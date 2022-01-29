import { NormalColors } from '@nextui-org/react'
export type FormOption<Colors=NormalColors> = {
  label: string;
  value: string;
  disabled?: boolean;
  color?: Colors;
}