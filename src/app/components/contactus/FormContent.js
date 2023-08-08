"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas/validation";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const FormContent = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
      // Add more AOS options here
    });
  }, []);

  // --------------------form validation----------------
  const handleSubmit = (values) => {
    // Handle form submission logic here
    setLoading(true);
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_7jepn9i",
          "template_61b0xxs",
          form.current,
          "Xf-NH0YIwCT8P04XZ"
        )
        .then((response) => {
          console.log(response);
          toast.success("Successfully sent!.", {
            duration: 3000,
            position: "top-center",
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      formik.resetForm();
    }, 800);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  // -----------------Send email function----------
  const form = useRef();

  return (
    <div className="w-full" data-aos="fade-up">
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div className="w-[100%]">
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-sm text-red-400">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="w-[100%]">
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-400">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              autoComplete="off"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength="10"
              className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-sm text-red-400">{formik.errors.phone}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              autoComplete="off"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-[43px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 "
            />
            {formik.touched.subject && formik.errors.subject ? (
              <p className="text-sm text-red-400">{formik.errors.subject}</p>
            ) : null}
          </div>
        </div>
        <div className="w-full mt-4 text-white">
          <textarea
            placeholder="Your message..."
            name="message"
            autoComplete="off"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-[120px] bg-[#1c1c1c] border border-slate-400 outline-none rounded-md pl-4 pt-2 "
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-sm text-red-400">{formik.errors.message}</p>
          ) : null}
        </div>
        <div className="mt-2 flex items-center justify-center md:justify-start">
          <button
            type="submit"
            className="w-[100px] h-[45px] border-none outline-none text-white bg-slate-500 hover:bg-slate-600 ease-in-out duration-300 rounded-md"
          >
            {loading === true ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default FormContent;
