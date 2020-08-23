//
// https://react-hook-form.com/get-started#Handleerrors
//
import React from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" ref={register({ required: true })} />
      {errors.firstName && "First name is required"}
      <Input name="lastName" ref={register({ required: true })} />
      {errors.lastName && "Last name is required"}
      <input type="submit" />
    </form>
  );
}
