import { useState, useEffect } from "react";
import "./register.css";
import FormInput from "./FormInput";
import Navbar from './Navbar';
import scrollreveal from "scrollreveal";
import { HashLink as NavLink } from 'react-router-hash-link';





const Login = () => {
  const [cartItems, setCartItems] = useState([]);
    const [values, setValues] = useState({
      username: "",
      
      password: "",
      
    });
  
    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    useEffect(() => {
      const sr = scrollreveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
          nav,
          #home,
          #slide,
          
          #menu,
          #cartmenu,
          #checkout1,
          .login,
          .register,
          .rev,
          
          .footer
      `,
        {
          opacity: 0,
          interval: 200,
        }
      );
    }, []);
  
    return (
        <>
        <Navbar countCartItems={cartItems.length}/>
      <div className="login">
        <form id="form1"  onSubmit={handleSubmit}>
          <h1>𝕃𝕠𝕘𝕚𝕟</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <NavLink to="/profile"><button id="bt1">Login</button> </NavLink> 
          <h4 ><NavLink to="/register" id="lin">Are you new here ?</NavLink></h4>
        </form> 
      </div>
      </>
    );
  };
  
  export default Login;
