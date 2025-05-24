import Link from "next/link";


const Navbar = () => {
    return (
       <div className="bg-[#402218]/20 z-10 fixed top-0 w-full text-white">
         <div className="py-7 max-w-6xl mx-auto flex justify-between">
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