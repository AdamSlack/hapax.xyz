import { Button, simpleColors, SimpleColors } from "@nextui-org/react"
import { useState } from "react"


type InputStyle = 'bordered' | 'underlined' | 'rounded' | undefined
const inputStyles: InputStyle[] = [
  undefined,
  'bordered',
  'rounded',
  'underlined',
]

export const useInputStyles = () => {
  const [color, setColor] = useState<SimpleColors>('default')
  const clearColor = () => setColor('default')

  const [inputStyle, setInputStyle] = useState<InputStyle>()
  const clearInputStyle = () => setInputStyle(undefined)

  const [status, setStatus] = useState<SimpleColors>('default');
  const clearStatus = () => setStatus('default');

  const [shadow, setShadow] = useState<boolean>(false);
  
  const StyleButtonGroup = () => (
    <Button.Group>
      {inputStyles.map((style) => (
        <Button onClick={() => setInputStyle(style)} disabled={inputStyle === style} key={`style-${style || 'default'}`}>{style || 'default'}</Button>
      ))}
    </Button.Group>
  )

  const ColorButtonGroup = () => (
    <Button.Group>
      {simpleColors.map((simpleColor) => (
        <Button onClick={() => setColor(simpleColor)} disabled={color === simpleColor} key={`color-${simpleColor}`}>{simpleColor}</Button>
      ))}
    </Button.Group>
  )

  const StatusButtonGroup = () => (
    <Button.Group>
      {simpleColors.map((simpleColor) => (
        <Button onClick={() => setStatus(simpleColor)} disabled={status === simpleColor} key={`status-${simpleColor}`}>{simpleColor}</Button>
      ))}
    </Button.Group>
  )

  return {
    setColor,
    clearColor,
    setInputStyle,
    clearInputStyle,
    setShadow,
    setStatus,
    clearStatus,
    inputStyle,
    color,
    shadow,
    status,
    inputStyles: {
      color,
      ...(inputStyle && { [inputStyle]: true}),
      shadow,
      status,
    },
    StyleButtonGroup,
    ColorButtonGroup,
    StatusButtonGroup,
  }
}