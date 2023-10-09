import { useFormik } from "formik";
import * as Yup from "yup";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactForm() {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className="flex justify-center content-center flex-col lg:flex-row text-white gap-5 font-kenyanRg tracking-wide text-lg">
      <form onSubmit={formik.handleSubmit} className="flex flex-col lg:w-3/5 md:w-3/5 w-4/5 max-w-[50rem] self-center">
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="rounded-sm p-2 text-black font-sfth-rg text-md tracking-wide"
          placeholder="John Doe"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {(formik.touched.name && formik.errors.name && <div className="text-md text-red-800">{formik.errors.name}</div>) || (<div className="h-5"> </div>)}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="JohnDoe@gmail.com"
          className="rounded-sm p-2 text-black font-sfth-rg text-md tracking-wide"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {(formik.touched.email && formik.errors.email && <div className="text-md text-red-800">{formik.errors.email}</div>) || (<div className="h-5"> </div>)}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="rounded-sm p-2 text-black font-sfth-rg text-md tracking-wide"
          placeholder="Hello, I would like to get in touch with you."
          onChange={formik.handleChange}
          value={formik.values.message}
          rows={5}
        />
        {(formik.touched.message && formik.errors.message && <div className="text-md text-red-800">{formik.errors.message}</div>) || (<div className="h-5"> </div>)}

        <button type="submit" className="w-full rounded-sm bg-[#222191] p-2 shadow-sm hover:bg-[#232191c2]">Submit</button>
        
      </form>
      <div className="flex border w-3/5 max-w-[50rem] lg:w-0 self-center lg:self-auto"></div>
      <div className="lg:flex-col flex-row flex justify-center content-center gap-4">
      <button className="rounded-full p-1 hover:bg-[#ffffff3b]">
        <LinkedInIcon className="text-white" fontSize="large"/>
      </button>
      <button className="rounded-full p-1 hover:bg-[#ffffff3b]">
        <GitHubIcon className="text-white" fontSize="large" />
      </button>
      </div>
    </main>
  );
}
