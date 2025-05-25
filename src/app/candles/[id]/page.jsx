


import Quantity from '@/app/components/quantity/Quantity';
import Button from '@/components/Button';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from "mongodb";

import { IoMdStar } from "react-icons/io";





const DetailPage = async({params}) => {
    const {id} = params;
      
  
     const itemCollections = dbConnect(collectionNameObj.itemCollections)


    const data = await itemCollections.findOne({_id: new ObjectId(id)});
    return (
        <div className="max-w-6xl mx-auto mt-32">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={data?.image} alt="cactus candle" className="h-[500px] w-[400px] object-cover"/>
                </div>
                <div className="space-y-9">
                    <div className="space-y-1">
                        <h2 className="text-4xl">{data?.name}</h2>
                    <p className="secondary">BDT {data?.price}</p>

                    <div className="flex gap-3 items-center">
                        <div className="flex gap-1 text-2xl lite_coffee">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <p className="text-sm secondary">(2 customer review)</p>
                    </div>
                    </div>
                    <p className="secondary">{data?.description}</p>
                   <div className='flex gap-3'>
                     <Quantity></Quantity>
                     <Button text={"Add to cart"}></Button>
                   </div>
                   <p className='hover:text-[#928c81]'>Add to wishlist</p>

                   <div className='secondary space-y-1'>
                    <p>Product ID: {data?.productId}</p>
                    <p>Category: {data?.category}</p>
                    <p>Falvour: {data?.flavour}</p>
                   </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default DetailPage;