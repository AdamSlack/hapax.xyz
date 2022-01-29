export type JsonDisplayProps = {
  jsonData: Record<any, any>
}

export const JsonDisplay = (props: JsonDisplayProps) => {
  const { jsonData } = props;

  return (
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  )
};

export default JsonDisplay