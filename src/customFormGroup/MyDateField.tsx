import * as React from "react"
import { FieldProps } from "formik"
import { TextField } from "@material-ui/core"
import { TextFieldProps } from "@material-ui/core/TextField/TextField"

export const MyDateField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field
}) => {
  return <TextField type="date" placeholder={placeholder} {...field} />
}
