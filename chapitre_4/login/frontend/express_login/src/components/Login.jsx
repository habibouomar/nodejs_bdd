import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {

    const submit = (e) => {

        e.preventDefault()

        console.log('e in submit e.target', e.target)
        console.log('e in submit e.target.email.value', e.target.email.value)
       

        const user = {

            email: e.target.email.value,
            password: e.target.password.value
      
        }
        console.log(user);

        const url = 'http://localhost:3003/login'
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({

                email: user.email,
                password: user.password,
    
            }),
            headers: new Headers({ 'content-type': 'application/json' })
        }).then(user => {
            console.log(user);
        })
    }

    return (
        <>
            <main className="form-signin">

                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Log In</h1>

                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label className='label' htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="password" />
                        <label className='label' htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>

            </main>
        </>
    )
}
