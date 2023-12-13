import { useForm } from 'react-hook-form'
import './CheckoutForm.css'

const CheckoutForm = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="checkoutform">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>First Name:</label>
                    <input type="text" {...register("firstname",{ required: true})}/>
                    {errors.firstname && errors.firstname.type === "required" && (
                        <p className="errorMsg"> First Name is required!</p>
                    )}
                </div>
                <div className="form-control">
                    <label>Last Name:</label>
                    <input type="text" {...register("lastname",{ required: true})}/>
                    {errors.lastname && errors.lastname.type === "required" && (
                        <p className="errorMsg"> Last Name is required!</p>
                    )}
                </div>
                <div className="form-control">
                    <label>Address:</label>
                    <input {...register("address",{ required: true})}/>
                    {errors.address && errors.address.type === "required" && (
                        <p className="errorMsg"> Address is required!</p>
                    )}
                </div>
                <div className="form-control">
                    <label>Phone number:</label>
                    <input type="number" {...register("phonenumber",{ required: true})}/>
                    {errors.phonenumber && errors.phonenumber.type === "required" && (
                        <p className="errorMsg"> Phonenumber is required!</p>
                    )}
                </div>
                <div className="form-control-spec">
                    <label>Special instructions:</label>
                    <textarea type="text" rows="4" {...register("specialinstructions",{ maxLength: 150})}/>
                    {errors.specialinstructions && errors.specialinstructions.type === "maxLength" && (
                        <p className="errorMsg"> Must be under 150 characters!</p>
                    )}
                </div>

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
  )
};

export default CheckoutForm;