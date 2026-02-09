import { useState } from "react"
import { Link } from "react-router"

function SignUp() {

    // variables
        const[userName, setUserName] = useState("")
        const[password, setPassword] = useState("")
        const[cpassword, setCPassword] = useState("")
    
        // function to handle signing up a new user
        const handleSubmit = (e:any) =>{
            e.preventDefault()
    
            console.log("handle submit in sign in", userName, password, cpassword)
        }


  return (
    <section>
        <section className="w-[80%] mx-auto mt-4">
        <h1 className="text-3xl text-center py-2">Organise your habits!</h1>
        <div className="home-hr-style mb-6">
            <hr />
        </div>

        <p className="text-lg text-center mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ab, optio. Temporibus consequuntur repellendus accusamus exercitationem <br /> delectus veniam facere dicta expedita quibusdam reprehenderit libero in, <br />autem repudiandae ipsam quasi, recusandae dolores.</p>
    
        <form 
            className="flex justify-center content-center flex-col w-[50%] mx-auto mb-10"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                name="userName" 
                placeholder="Username" 
                className="text-lg p-2 border-2 border-black rounded-md mb-3"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password"
                className="text-lg p-2 border-2 border-black rounded-md mb-3"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input 
                type="password" 
                name="cpassword" 
                placeholder="Confirm Password"
                className="text-lg p-2 border-2 border-black rounded-md mb-5"
                value={cpassword}
                onChange={e => setCPassword(e.target.value)}
            />
            <input 
                type="submit" 
                value="Sign Up"
                className="bg-gray-950 text-white py-2 px-6 text-lg rounded-md cursor-pointer" 
            />
        </form>

        <div className="text-center">
            <p className="text-lg">Already have an account?</p>
            <Link to="/sign-in" className="text-gray-950 text-lg italic underline">Sign In</Link>
        </div>

    </section>
    </section>
  )
}

export default SignUp