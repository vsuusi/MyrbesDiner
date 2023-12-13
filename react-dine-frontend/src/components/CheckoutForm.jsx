import { useForm } from 'react-hook-form'

const CheckoutForm = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="First Name" {...register("firstname",{ required: 'error message'})}/>
      <input defaultValue="Last Name" {...register("lastname",{ required: true})}/>
      <input defaultValue="Address" {...register("address",{ required: true})}/>
      <input defaultValue="Phone number" {...register("phonenumber",{ required: true})}/>
      <input defaultValue="Special instructions" {...register("specialinstructions",{ maxLength: 100})}/>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
};

export default CheckoutForm;