import React from 'react';
import '../styles/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";

export default function Signup() {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = data => {
        delete data.confirmPassword;
        fetch('http://localhost:3003/users', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('You are registered')
            })
    };

    return (

        <div className="container">
            <div className="row justify-content-center">

                <div className="col-8">

                    <h4 className="mb-3">Register</h4>

                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation was-validated" noValidate>

                        <div className="row g-3">

                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" placeholder="john" {...register("firstName", { required: true })} required />
                                {errors.firstName && <span>This field is required</span>}
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" placeholder="doe" {...register("lastName", { required: true })} required />
                                {errors.lastName && <span>This field is required</span>}
                            </div>

                            <div className="col-12">
                                <label htmlFor="surname" className="form-label">Surname</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" name="surname" className="form-control" id="surname" placeholder="jd2000" {...register("surname", { required: true })} required />
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="john@example.com" {...register("email", { required: true })} required />
                                {errors.email && <span>Username and Email is required</span>}
                            </div>

                            <div className="col-12">
                                <label htmlFor="date" className="form-label">Birth Date</label>
                                <input type="date" name="date" className="form-control" id="date" {...register("dateOfBirth")} required />
                            </div>

                            <div className="col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="********" {...register("password", { required: true, minLength: 8 })} required />
                                {errors.password?.type === 'required' && <span>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span>This field needs to be more than 8 characters </span>}
                            </div>

                            <div className="col-12">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmpassword" className="form-control" id="confirmpassword" placeholder="********" {...register("confirmPassword", { validate: value => getValues('password') === value })} required />
                                {errors.confirmPassword && <span>This field needs to be the same as the password </span>}
                            </div>

                        </div>

                            <button className="w-100 btn btn-primary btn-lg mt-4 mb-5" type="submit">Continue</button>
                    
                    </form>

                </div>

            </div>
        </div>
    )
}
