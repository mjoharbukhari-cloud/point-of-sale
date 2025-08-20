import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, type = "text", register, required }) => (
  <div className="mb-4 flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      {...register(label, { required })}
      className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <div className="mb-4 flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <select
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    >
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
));

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen font-serif flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl border border-gray-300 shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

    
        <Input label="Username" register={register} required />

      
        <Input label="Password" type="password" register={register} required />

        
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("RememberMe")}
            className="mr-2"
          />
          <label className="text-sm">Remember Me</label>
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Login"
          className="w-full bg-secondary text-white py-2 rounded hover:bg-blue-800 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
