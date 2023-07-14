// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Formik, Form, Field } from 'formik';

// const initialValues = {name:'', number:''}

// class FormPhonebook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   inputNameId = nanoid();

//   inputNumberId = nanoid();

//   handleChange = ({ target }) => {
//     this.setState({
//       [target['name']]: target.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Formik initialValues="initialValues" onSubmit={this.handleSubmit}>
//         <Form>
//           <label htmlFor={this.inputNameId}>
//             Name
//             <Field
//               type="text"
//               name="name"
//               id={this.inputNameId}
//               onChange={this.handleChange}
//               // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               value={this.state.name}
//               required
//             />
//           </label>

//           <label htmlFor={this.inputNumberId}>
//             Number
//             <Field
//               type="tel"
//               name="number"
//               id={this.inputNumberId}
//               onChange={this.handleChange}
//               // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               value={this.state.number}
//               required
//             />
//           </label>

//           <button type="submit">Add contact</button>
//         </Form>
//       </Formik>
//     );
//   }
// }

// export default FormPhonebook;

import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormWrapper,Button,LabelForm,ErrorMessageForm,FieldForm } from './FormPhonebook.styled';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

const FormPhonebook = ({ onSubmit }) => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <LabelForm htmlFor={inputNameId}>Name</LabelForm>
        <FieldForm type="text" name="name" id={inputNameId} required />
        <ErrorMessageForm name="name" component="p" className="error" />

        <LabelForm htmlFor={inputNumberId}>Number</LabelForm>
        <FieldForm type="tel" name="number" id={inputNumberId} required />
        <ErrorMessageForm name="number" component="p" className="error" />

        <Button type="submit">Add contact</Button>
      </FormWrapper>
    </Formik>
  );
};

export default FormPhonebook;
