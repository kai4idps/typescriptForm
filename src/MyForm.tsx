import * as React from "react"
import { Button } from "@material-ui/core"
import { Form, Formik, Field } from "formik"
import { MyInputField } from "./customFormGroup/MyInputField"
import { MyDateField } from "./customFormGroup/MyDateField"
import { MyCheckboxField } from "./customFormGroup/MyCheckboxField"
import { MyRadio } from "./customFormGroup/MyRadioField"

type Values = {
  firstName: string
  date: string
  email: string
}

interface Props {
  onSubmit: (value: Values) => void
}

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          date: "",
          email: "",
          isTall: false,
          select: [],
          radio: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.firstName.length > 3) {
            setSubmitting(true)
            onSubmit(values)
            setSubmitting(false)
          } else {
            console.log("ERROR1")
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <MyInputField name="firstName" placeholder="firstName" />
            <div>
              <MyInputField name="email" placeholder="email" />
            </div>
            {/* <div>
              <Field
                name="firstName"
                placeholder="firstName"
                component={MyInputField}
              />
            </div> */}
            <div>
              <Field
                name="date"
                type="date"
                placeholder="date"
                defaultValue="2017-05-24"
                values={values.date}
                component={MyDateField}
              />
            </div>
            {/* <div>
              <Field
                name="email"
                placeholder="email"
                component={MyInputField}
              />
            </div>  */}
            <Field name="isTall" component={MyCheckboxField} />
            <div>select:</div>

            <Field
              name="select"
              value="apple"
              type="checkbox"
              component={MyCheckboxField}
            />
            <Field
              name="select"
              value="banana"
              type="checkbox"
              component={MyCheckboxField}
            />
            <Field
              name="select"
              value="cherry"
              type="checkbox"
              component={MyCheckboxField}
            />
            <div>radio</div>
            <MyRadio name="radio" value="Guava" type="radio" label="Guava" />
            <MyRadio name="radio" value="Kiwi" type="radio" label="Guava" />
            <MyRadio name="radio" value="Lemon" type="radio" label="Guava" />

            {/* <Field
              name="radio"
              value="Kiwi "
              type="radio"
              component={MyRadioField}
            /> */}

            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              disabled={isSubmitting}
            >
              submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default MyForm
