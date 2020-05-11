import * as React from "react"
import { useField, FieldHookConfig } from "formik"
import { TextField } from "@material-ui/core"

export const MyInputField: React.FC<FieldHookConfig<{}>> = props => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return <TextField {...field} helperText={errorText} />
}
