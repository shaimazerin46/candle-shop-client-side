import Link from "next/link";


const Navbar = () => {
    return (
       <div className="">
         <div className="max-w-6xl mx-auto  flex justify-between fixed top-0 bg-transparent transform -translate-x-1/2 left-1/2 py-10 w-full items-center ">
            {/* brand name */}
           <div>
            <Link href='/' className="italic">Lux Flamma</Link>
           </div>

           <ul className="flex space-x-16">
            <li>
                <Link href='/'>Home</Link>
               
            </li>
            <li><Link href='/'>Shop</Link></li>
            <li><Link href='/'>Cart</Link></li>
            <li><Link href='/'>Team</Link></li>
            <li><Link href='/'>Contact</Link></li>
            <li><Link href='/'>Sign in</Link></li>
             
                
                
           </ul>
        </div>
       </div>
    );
};

export default Navbar;