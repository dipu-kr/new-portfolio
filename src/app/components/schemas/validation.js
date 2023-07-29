import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Name field is required."),
  email: Yup.string().email().required("email field is required"),
  // phone: Yup.number().min(10).max(10).required("phone field is required"),
  phone: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  subject: Yup.string().min(5).required("Subject field is required"),
  message: Yup.string().min(30).required("Message field is required"),
});
