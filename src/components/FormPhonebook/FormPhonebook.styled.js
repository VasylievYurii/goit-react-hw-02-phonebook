import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  /* background-color: red; */
  padding: 1em;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  width: 91%;
`;

export const Button = styled.button`
  background: var(--color-accent);
  background-image: -webkit-linear-gradient(top, var(--color-accent), #2980b9);
  background-image: -moz-linear-gradient(top, var(--color-accent), #2980b9);
  background-image: -ms-linear-gradient(top, var(--color-accent), #2980b9);
  background-image: -o-linear-gradient(top, var(--color-accent), #2980b9);
  background-image: linear-gradient(to bottom, var(--color-accent), #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  /* font-family: Arial; */
  border: none;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  /* text-decoration: none; */
  /* outline: none; */
  &:hover {
    font-weight: 700;
    color: var(--color-main-one);
    background: var(--color-line-hover);
    background-image: -webkit-linear-gradient(
      top,
      var(--color-line-hover),
      var(--color-accent)
    );
    background-image: -moz-linear-gradient(
      top,
      var(--color-line-hover),
      var(--color-accent)
    );
    background-image: -ms-linear-gradient(
      top,
      var(--color-line-hover),
      var(--color-accent)
    );
    background-image: -o-linear-gradient(
      top,
      var(--color-line-hover),
      var(--color-accent)
    );
    background-image: linear-gradient(
      to bottom,
      var(--color-line-hover),
      var(--color-accent)
    );
    /* text-decoration: none; */
  }
`;

export const LabelForm = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.3em;
  /* color: var(--color-main-three); */
  color: white;
`;

export const ErrorMessageForm = styled(ErrorMessage)`
  margin-bottom: 1em;
  color: red;
`;
export const FieldForm = styled(Field)`
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 1em;
  border-radius: 10px;
  border: none;
  outline-color: var(--color-accent);
`;
