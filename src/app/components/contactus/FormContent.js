import React, { useEffect } from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas/validation";
import AOS from "aos";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const FormContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });

  return (
    <div className="w-full" data-aos="fade-up">
      <div className="grid grid-cols-2 gap-4 text-white">
        <div className="w-[100%]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
          />
          {errors.name && touched.name ? (
            <p className="text-sm text-red-400">{errors.name}</p>
          ) : null}
        </div>
        <div className="w-[100%]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
          />
          {errors.email && touched.email ? (
            <p className="text-sm text-red-400">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            autoComplete="off"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
          />
          {errors.phone && touched.phone ? (
            <p className="text-sm text-red-400">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
          />
          {errors.subject && touched.subject ? (
            <p className="text-sm text-red-400">{errors.subject}</p>
          ) : null}
        </div>
      </div>
      <div className="w-full mt-4 text-white">
        <textarea
          placeholder="Your message..."
          name="message"
          autoComplete="off"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full h-[120px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 pt-2 "
        >
          Your message...
        </textarea>
        {errors.message && touched.message ? (
          <p className="text-sm text-red-400">{errors.message}</p>
        ) : null}
      </div>
      <div className=" mt-2">
        <button
          onClick={handleSubmit}
          className="w-[100px] h-[45px] border-none text-white bg-slate-500 hover:bg-slate-600 ease-in-out duration-300 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContent;
