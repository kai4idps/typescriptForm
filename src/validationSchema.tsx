import * as Yup from "yup"

export const validationSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    pet: Yup.array().of(
      Yup.object().shape({ name: Yup.string().required("Required") })
    )
  })
}
