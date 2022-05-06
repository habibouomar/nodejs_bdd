import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/Login"
import Admin from "../components/Admin"
import SignUp from "../components/Signup"
import Home from "../components/Home"

export default class Router extends React.Component {

    render() {

        return (

            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                </Routes>
            </div>
        )
    }
}
