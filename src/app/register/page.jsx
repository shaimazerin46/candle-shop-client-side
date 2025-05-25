import Button from "@/components/Button";
import Headline from "@/components/Headline";
import Link from "next/link";


const RegisterPage = () => {
    return (
        <div className="mt-10">
            <Headline text={"Sign up here"}></Headline>
             <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl mx-auto ">
      <div className="card-body">
        <fieldset className="fieldset">
             <label className="label text-[16px]">Name</label>
          <input type="text" className="input w-full mb-3" placeholder="Name" />
          <label className="label text-[16px]">Email</label>
          <input type="email" className="input w-full mb-3" placeholder="Email" />
          <label className="label text-[16px]">Password</label>
          <input type="password" className="input w-full mb-3" placeholder="Password" />
          <div className="flex justify-between">
           
            <p className="text-right">Already have an account?<Link href="/login" className="link link-hover">sign up</Link></p>
          </div>
         <div className="flex justify-center mx-auto mt-5">
            <Button text={"Sign up"}></Button>
         </div>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default RegisterPage;