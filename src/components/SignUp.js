
import React, { useState } from "react";



const SignUp = () => {

    // let [values, setValues] = useState({
    //     fullname: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // });



    //on button click

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    let [check, setflag] = useState(false);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("helo")

        if (!email || !name || !password || !confirmPassword) {
            setError('All fields are required');
            setflag(false);
            return;
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
setError("email is invalid")
setflag(false)
        }
        else if (password !== confirmPassword) {
            setError('Passwords do not match');
            setflag(false);
            return;
        }
        else{
           
            setError("")
            setflag(true);
            
        }

        // Add code to submit the form here
        console.log('Form submitted successfully');
    };




    return (
        <div className="main_box">
            <div className="form-wrap">

                <h1 className="title">Sign Up</h1>

                <div className="input-wrap" >
                    <form >
                        <input type="text" className="input-feild" placeholder="Full Name" name="fullname" value={name} onChange={(e) => setName(e.target.value)} /><br></br>

                        <input type="email" className="input-feild" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
          
                       <input type="password" className="input-feild" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

                        <input type="password" className="input-feild" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br></br>

                        {error && <p style={{color:"red"}}>{error}</p>}
                        {check && <p style={{color:"green"}}>Successfully Submitted</p>}

                        {/* <p className={`${check}? 'error': 'no-err'`}>{error}</p> */}

                        <button type="submit" onClick={handleSubmit}>SignUp</button>

                </form>


            </div>
                
         </div>             
        

    </div>



            ) 
}
                                     
export default SignUp
