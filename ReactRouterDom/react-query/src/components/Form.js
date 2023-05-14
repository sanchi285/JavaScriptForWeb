import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
export const Form = ()=>{

   
    const schema  = yup.object().shape(
      {
        fullName: yup.string().required("Your fullname is required"),
        email: yup.string().email().required("empty email not allowed"),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confPass: yup.string().oneOf([yup.ref("password"),null]).required("Didn't match with previosone"),
        
      }
    );

    const {register, handleSubmit, formState: {errors}} = useForm(
      {
        resolver: yupResolver(schema)
      }
    );

    const onSubmit = (data)=>{
        console.log(data);
    }


    return (
        <div>
          <h1>Simple Form</h1>
          <form onSubmit = {handleSubmit(onSubmit)}>
          <div>
          <input type="text" placeholder="Full Name" {...register("fullName")}/>
          <p>{errors.fullName?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Email.." {...register("email")}/>
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Age.." {...register("age")}/>
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Password..." {...register("password")}/>
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="Confirm Password...." {...register("confPass")}/>
          <p>{errors.confPass?.message}</p>
        </div>
        <button type="submit">Submit</button>
          </form>
        </div>
      );

}