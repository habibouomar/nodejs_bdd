import React from 'react';
import '../styles/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {

    const submit = (e) => {

        e.preventDefault()
        console.log('e in submit e.target', e.target)
        console.log('e in submit e.target.firstaname.value', e.target.firstname.value)
        console.log('e in submit e.target.lastname.value', e.target.lastname.value)
        console.log('e in submit e.target.username.value', e.target.username.value)
        console.log('e in submit e.target.email.value', e.target.email.value)
        console.log('e in submit e.target.password.value', e.target.password.value)
        console.log('e in submit e.target.confirmpassword.value', e.target.confirmpassword.value)

        const user = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            date: e.target.date.value,
        }

        const url = 'http://localhost:3003/users'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({

                email: user.email,
                password: user.password,
                firstName: user.firstname,
                lastName: user.lastname,
                surname: user.username,
                dateOfBirth: user.date
            }),
            headers: new Headers({ 'content-type': 'application/json' })
        }).then( user => {
            console.log(user);
        })
    }

    return (

        <div className="container">
            <div className="row justify-content-center">

                <div className="col-6">

                    <h4 className="mb-3">Register</h4>

                    <form onSubmit={submit} className="needs-validation" noValidate>

                        <div className="row g-3">

                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" name="firstname" className="form-control" id="firstname" placeholder="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" name="lastname" className="form-control" id="lastname" placeholder="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" name="userame" className="form-control" id="username" placeholder="Username" required />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="you@example.com" required />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="date" className="form-label">Birth Date</label>
                                <input type="date" name="date" className="form-control" id="date" placeholder="" required />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="********" required />
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmpassword" className="form-control" id="confirmpassword" placeholder="********" required />
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                            </div>

                        </div>

                        <label htmlFor="lastName" className="form-label">Please continue your registration</label>
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue</button>

                    </form>

                </div>

            </div>
        </div>
    )
}
