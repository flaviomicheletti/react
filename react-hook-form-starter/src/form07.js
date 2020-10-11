//
// https://react-hook-form.com/get-started#ControlledInput
//
import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

export default function App() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Option 1 (preferred): pass a component to the Controller. */}
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      {/* Option 2: pass a JSX element to the Controller. */}
      {/* Note that any prop passed to the element will be overriden. */}
      {/* In this case, "SomeName" will be changed to "MyCheckbox". */}
      <Controller
        as={<Checkbox name="SomeName"/>}
        name="MyCheckbox"
        control={control}
        defaultValue={false}
      />

      <button>Submit</button>
    </form>
  );
}
