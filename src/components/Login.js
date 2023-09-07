import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useState } from "react";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleClick = () =>{
        return  setIsSignInForm(!isSignInForm);
        
        
    }
    return <div className="">
        <Header/>
        <div className="absolute">
            <img src={BACKGROUND_IMG} alt="background"/>

        </div>
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 text-white rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" : "Sign Up" }</h1>
            {
                !isSignInForm && <input type="text" placeholder="First Name" className="p-4 my-4  w-full rounded-lg bg-gray-700"/> 
                
            }
            {
                !isSignInForm && <input type="text" placeholder="Last Name" className="p-4 my-4  w-full rounded-lg bg-gray-700" />
            }
            
            <input type="text" placeholder="Email or Phone Number" className="p-4 my-4  w-full rounded-lg bg-gray-700" />
            {
                isSignInForm && <input type="password" placeholder="Password" className="p-4 my-4 mb-2 w-full rounded-lg bg-gray-700"/>
            }
            
            <button className="p-4 my-6  w-full bg-red-600 rounded-lg"> {isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="cursor-pointer" onClick={handleClick}>{isSignInForm ? " New to Netflix? Sign up now" : "Already a member? Login now"}</p>
        </form>
    </div>
};

export default Login;