import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("txtTwo")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="txtOne" defaultValue="test" ref={register} />
      
      <input name="txtTwo" ref={register({ required: true })} />
      {errors.txtTwo && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}