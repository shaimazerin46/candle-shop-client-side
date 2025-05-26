"use client";

import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registerUser";
import { toast } from "react-toastify";

const Register = () => {

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // sending data to database
        const result = await registerUser({name,email,password})
        if(result?.acknowledged){
            toast.success('Registration successful!');
            form.reset();
        }

    }
    return (
         <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl mx-auto ">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
             <label className="label text-[16px]">Name</label>
          <input name="name" type="text" className="input w-full mb-3" placeholder="Name" />
          <label className="label text-[16px]">Email</label>
          <input name="email" type="email" className="input w-full mb-3" placeholder="Email" />
          <label className="label text-[16px]">Password</label>
          <input name="password" type="password" className="input w-full mb-3" placeholder="Password" />
          <div className="flex justify-between">
           
            <p className="text-right">Already have an account?<Link href="/login" className="link link-hover">sign in</Link></p>
          </div>
         <div className="flex justify-center mx-auto mt-5">
            <button type="submit" className="btn bg-[#865439] text-white hover:bg-[#402218]">Submit</button>
         </div>
        </form>
      </div>
    </div>
    );
};

export default Register;