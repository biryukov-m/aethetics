import { object, string } from 'yup';

export const contactsValidationSchema = object().shape({
  name: string().min(2).max(40).required("Ім'я - обов'язкове поле вводу!"),
  surname: string().min(2).max(40).required('Прізвище - обов`язкове поле вводу!'),
  tel: string().max(15).required('Телефон - обов`язкове поле вводу!'),
  email: string().max(40).required('Електронна пошта - обов`язкове поле вводу!')
});
