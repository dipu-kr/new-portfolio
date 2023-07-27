import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Name field is required."),
  email: Yup.string().email().required("email field is required"),
  phone: Yup.number().min(10).max(12).required("phone field is required"),
  subject: Yup.string().min().required("Subject field is required"),
  message: Yup.string().min(50).required("Message field is required"),
});
