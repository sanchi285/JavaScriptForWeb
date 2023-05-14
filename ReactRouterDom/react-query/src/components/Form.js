import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
export const Form = ()=>{

   
    const schema  = yup.object().shape(
      {
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confPass: yup.string().oneOf([yup.ref("password"),null]).required(),
        
      }
    );

    const {register, handleSubmit} = useForm(
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
        </div>
        <div>
          <input type="text" placeholder="Email.." {...register("email")}/>
        </div>
        <div>
          <input type="text" placeholder="Age.." {...register("age")}/>
        </div>
        <div>
          <input type="text" placeholder="Password..." {...register("password")}/>
        </div>
        <div>
          <input type="text" placeholder="Confirm Password...." {...register("confPass")}/>
        </div>
        <button type="submit">Submit</button>
          </form>
        </div>
      );

}