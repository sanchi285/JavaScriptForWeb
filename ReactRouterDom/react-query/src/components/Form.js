import { useForm } from "react-hook-form"
export const Form = ()=>{

    const {register, handleSubmit} = useForm();

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