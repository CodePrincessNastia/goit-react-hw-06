import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };
export default function ContactForm(){
    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };
  
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form  className={css.form}>
          <div className={css.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" />
          </div>
  
          <div className={css.field}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
}