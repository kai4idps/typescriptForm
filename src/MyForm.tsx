import * as React from "react"
import { Button, Select, MenuItem } from "@material-ui/core"
import { Form, Formik, Field, FieldArray } from "formik"
import { MyInputField } from "./customFormGroup/MyInputField"
import { MyDateField } from "./customFormGroup/MyDateField"
import { MyCheckboxField } from "./customFormGroup/MyCheckboxField"
import { MyRadio } from "./customFormGroup/MyRadioField"
import { validationSchema } from "./validationSchema"

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
          radio: "",
          pets: [{ type: "cat", name: "Persian", id: "" + Math.random() }]
        }}
        validationSchema={validationSchema}
        // validate={values => {
        //   const errors: any = {}
        //   if (values.firstName.length < 3) {
        //     errors.firstName = "need more than 3"
        //   }
        //   return errors
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          onSubmit(values)
          setSubmitting(false)
        }}
      >
        {({ values, isSubmitting, errors }) => (
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
            <FieldArray name="pets">
              {arrayHelpers => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: "pets",
                        name: "",
                        id: "" + Math.random()
                      })
                    }
                  >
                    add pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyInputField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">cat</MenuItem>
                          <MenuItem value="dog">dog</MenuItem>
                          <MenuItem value="frog">frog</MenuItem>
                        </Field>

                        <Button onClick={() => arrayHelpers.remove(index)}>
                          x
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </FieldArray>
            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              disabled={isSubmitting}
            >
              submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default MyForm
