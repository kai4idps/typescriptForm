import * as React from "react"
import { FieldHookConfig, useField } from "formik"
import { Checkbox, FormControlLabel } from "@material-ui/core"

type MyCheckboxProps = { label: string } & FieldHookConfig<{}>

export const MyCheckboxField: React.FC<MyCheckboxProps> = ({
  label,
  ...props
}) => {
  const [field] = useField(props)
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />
}
