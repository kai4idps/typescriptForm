import * as React from "react"
import { useField, FieldHookConfig } from "formik"
import { Radio, FormControlLabel } from "@material-ui/core"

type MyRadioProps = { label: string } & FieldHookConfig<{}>

export const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField(props)

  return <FormControlLabel {...field} control={<Radio />} label={label} />
}
