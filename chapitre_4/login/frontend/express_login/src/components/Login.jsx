import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";


export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3003/login', {
            method: 'POST',
            // credentials: 'include', // Bien ajouter cette ligne pour que le cookie soit bien enregistré
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('You are Logged')
            })
    };

    return (
        <>
            <main className="form-signin">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                    <div className="form-floating mb-3">
                        <input type="email" name="email" className="form-control mb-3" id="floatingInput" placeholder="" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <label className='label' htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="" {...register("password", { required: true })} />
                        {errors.password?.type === 'required' && <span>This field is required</span>}
                        {errors.password?.type === 'minLength' && <span>This field needs to be more than 8 characters </span>}
                        <label className='label' htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>

            </main>
        </>
    )
}
