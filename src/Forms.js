import { useFormik } from "formik";
import * as yup from "yup"
export function Forms() {
 const validationSchema = yup.object({password:yup.string().min(4).max(5).required()})
 
  // const validateform = (values) => {
  //   const  errors={}
  //   console.log("valdiation", values);
  //   if(values.password.length>10){
  //     errors.password="enter a small password"
  //   }
  //   else if(values.password.length<4){
  //     errors.password="enter a strong password"
  //   }
  //   console.log(errors)

  //   return errors
  // };
  const formik = useFormik({
    initialValues: { email: "rajkumar@gmail.com", password: "" },
    validationSchema: validationSchema,
    onSubmit:(values)=>{
      console.log("submit",values)
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <input
      id="email"
        type="email"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Enter your Email"
      />
      <input
      id="password"
        type="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Enter your password"
      /> {formik.touched.password && formik.errors.password ? formik.errors.password: ""}
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}
