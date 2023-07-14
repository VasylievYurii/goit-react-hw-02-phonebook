import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  padding: 1em;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  width: 91%;
`;

export const Button = styled.button`
  background-color: var(--color-contacts);
  border-radius: 28px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  transition: background-color 500ms var(--timing-function), font-weight 300ms var(--timing-function), color 300ms var(--timing-function);
  &:hover {
    font-weight: 700;
    color: var(--color-main-one);
    background-color: var(--color-line-hover);
  }
`;

export const LabelForm = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.3em;
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
