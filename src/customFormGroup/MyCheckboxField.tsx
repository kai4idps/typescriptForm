import * as React from "react"
import { FieldProps } from "formik"
import { Checkbox } from "@material-ui/core"
import { TextFieldProps } from "@material-ui/core/TextField/TextField"

export const MyCheckboxField: React.FC<FieldProps & TextFieldProps> = ({
  value,
  field
}) => {
  return <Checkbox value={value} {...field} />
}
