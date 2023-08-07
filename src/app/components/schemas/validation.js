import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name length min 3 character")
    .max(25)
    .required("Name field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("email field is required"),
  phone: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  subject: Yup.string().required("Subject field is required"),
  message: Yup.string().required("Message field is required"),
});
