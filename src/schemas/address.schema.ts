import { object, string } from 'yup';

export const addressValidationSchema = object().shape({
  city: string().min(4).max(40).required('Назва населеного пункту - обов`язкове поле вводу!'),
  street: string().min(4).max(25).required('Назва вулиці - обов`язкове поле вводу!'),
  house: string().min(1).max(8).required('Номер будинку - обов`язкове поле вводу!'),
  apartment: string().min(4).max(40),
  postal: string()
    .min(4)
    .max(40)
    .required('Індекс або номер поштового відділення - обов`язкове поле вводу!')
});
