import Button from '@/components/Button';
import Headline from '@/components/Headline';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="mt-10">
            <Headline text={"Sign in here"}></Headline>
             <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl mx-auto ">
      <div className="card-body">
        <fieldset className="fieldset">
            
          <label className="label text-[16px]">Email</label>
          <input type="email" className="input w-full mb-3" placeholder="Email" />
          <label className="label text-[16px]">Password</label>
          <input type="password" className="input w-full mb-3" placeholder="Password" />
          <div className="flex justify-between">
            <p><a className="link link-hover">Forgot password?</a></p>
            <p className="text-right">Don't have an account?<Link href="/register" className="link link-hover">sign in</Link></p>
          </div>
         <div className="flex justify-center mx-auto mt-5">
            <Button text={"Sign in"}></Button>
         </div>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default LoginPage;