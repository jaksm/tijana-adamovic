import React from "react";
import Card from "../components/Card";
import Input from "../ui/Input";
import Title from "../ui/Title";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import Button from "../ui/Button";
import { Grid, GridItem } from "styled-grid-component";
import theme from "../theme";

const Form = styled(Formik)`
  margin-top: 3rem;
`;

const FormContainer = styled.form``;

const FormField = styled(GridItem)`
  display: flex;
  flex-direction: column;
`;

const FormError = styled.label`
  font-size: ${theme.font.size.sm};
  max-width: 100%;
`;

const schema = yup.object().shape({
  fullName: yup.string("Ime nije ispravno!").required("Ime je obavezno!"),
  email: yup
    .string()
    .email("E-mail nije ispravan!")
    .required("E-mail je obavezan!"),
  dateOfBirth: yup.date("Datum rodjenja nije ispravan!").required("Datum rodjenja je obavezan!"),
  phone: yup.string("Broj telefona je neispravan!").required("Broj telefona je obavezan!"),
  passportCountry: yup.string("Zemlja pasosa je neispravna!").required("Zemlja pasosa je obavezna!"),
  citizenship: yup.string("Drzavljanstvo nije ispravno!").required("Drzavljanstvo je obavezno!"),
  place: yup.string("Mesto boravka je neispravno!").required("Mesto boravka je obavezno"),
  visaCountry: yup.string("Zemlja vize je neispravna!").required("Zemlja vize je obavezna!"),
  refferer: yup.string("Izvor je neispravan!"),
  message: yup.string("Poruka nije ispravna!")
});

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    dateOfBirth: new Date(),
    phone: "",
    passportCountry: "",
    citizenship: "",
    place: "",
    visaCountry: "",
    refferer: "",
    message: ""
  };
  const validate = async values => await schema.isValid(values);
  const submit = () => {};

  return (
    <>
      <Card padding="10rem" center column>
        <Title>Upitnik</Title>
        <Form initialValues={initialValues} validate={validate} onSubmit={submit} validationSchema={schema}>
          {({ errors, touched, isSubmitting, handleBlur, values, handleChange, handleSubmit }) => (
            <FormContainer onSubmit={handleSubmit}>
              <Grid width="100%" templateColumns="repeat(3, 1fr)" gap="20px" autoRows="minmax(100px, auto)">
                <FormField>
                  <Input
                    placeholder="Ime i prezime"
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                  />
                  <FormError htmlFor="fullName">{errors.fullName && touched.fullName && errors.fullName}</FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <FormError htmlFor="email">{errors.email && touched.email && errors.email}</FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Datum rodjenja"
                    type="date"
                    name="dateOfBirth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                  />
                  <FormError htmlFor="dateOfBirth">
                    {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth}
                  </FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Broj telefona"
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <FormError htmlFor="phone">{errors.phone && touched.phone && errors.phone}</FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Zemlja pasosa"
                    type="text"
                    name="passportCountry"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passportCountry}
                  />
                  <FormError htmlFor="passportCountry">
                    {errors.passportCountry && touched.passportCountry && errors.passportCountry}
                  </FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Drzavljanstvo"
                    type="text"
                    name="citizenship"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.citizenship}
                  />
                  <FormError htmlFor="citizenship">
                    {errors.citizenship && touched.citizenship && errors.citizenship}
                  </FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Mesto boravka"
                    type="text"
                    name="place"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.place}
                  />
                  <FormError htmlFor="place">{errors.place && touched.place && errors.place}</FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Za vizu koje zemlje ste zainteresovani"
                    type="text"
                    name="visaCountry"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.visaCountry}
                  />
                  <FormError htmlFor="visaCountry">
                    {errors.visaCountry && touched.visaCountry && errors.visaCountry}
                  </FormError>
                </FormField>
                <FormField>
                  <Input
                    placeholder="Kako ste saznali za nas?"
                    type="text"
                    name="refferer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.refferer}
                  />
                  <FormError htmlFor="refferer">{errors.refferer && touched.refferer && errors.refferer}</FormError>
                </FormField>
              </Grid>
              <div>
                <Input
                  as="textarea"
                  placeholder="Poruka"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  rows="20"
                />
                <FormError htmlFor="message">{errors.message && touched.message && errors.message}</FormError>
              </div>

              <Button basic type="submit" disabled={isSubmitting} style={{ marginTop: "1rem" }}>
                Pošalji
              </Button>
            </FormContainer>
          )}
        </Form>
      </Card>
    </>
  );
};

export default Contact;
