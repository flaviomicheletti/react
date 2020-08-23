//
// https://react-hook-form.com/get-started#WorkwithUIlibrary (option 3)
//
import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  const [values, setReactSelectValue] = useState({ selectedOption: [] });

  const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelectValue({ selectedOption });
  }
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register({ name: "reactSelect" }); // custom register react-select 
    register({ name: "AntdInput" }); // custom register antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="HelloWorld" inputRef={register} />
      <InputField name="AntdInput" onChange={handleChange} />
      <Select
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti
      />
      <input type="submit" />
    </form>
  );
}
