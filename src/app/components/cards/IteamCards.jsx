import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const IteamCards = ({ item }) => {
    return (
        <div className='lg:col-span-3 relative main_box col-span-12 md:col-span-6 mx-auto'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 h-96 w-[258px] bg-[#C68B59] opacity-60 z-10 image_box'>

               <div className="space-y-3 text-center text-white absolute bottom-10 transform -translate-x-1/2 left-1/2">
                <p>{item?.name}</p>
                <p>{item?.price} BDT</p>
                 <div className="flex justify-center gap-2  text-3xl">
                    <MdOutlineShoppingCart /> <IoEyeOutline />
                 </div>
               </div>
            </div>

            {/* Image */}
            
                {/* <Image
                    src={item?.image}
                    alt="Candles"
                    priority={true}
                    width={384}
                    height={384}
                    className="object-cover"
                /> */}
                <img src={item?.image} alt="" className="h-96 lg:w-96 w-[258px]"/>
            
        </div>
    );
};

export default IteamCards;