import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import React from 'react';
import IteamCards from '../components/cards/IteamCards';
import shop from '@/../public/images/shop.jpg'
import Headline from '@/components/Headline';

const ShopPage = async () => {

    const itemCollections = dbConnect(collectionNameObj.itemCollections)
    const data = await itemCollections.find().toArray()
    return (
        <div className='pb-20 '>
            <div
            style={{backgroundImage: `linear-gradient(rgba(134, 84, 57, 0.5), rgba(134, 84, 57, 0.5)), url(${shop.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}
            className='h-[300px]'
            >
            <div className='pt-20 text-white'>
                <Headline text={"Shop here"}></Headline>
            </div>

            </div>

            
            <div className=' mt-20 max-w-6xl mx-auto '>
                    <div className='flex justify-center mx-auto'>
                   <input type="text" placeholder="Search" className="input mb-20 focus:outline-none hover:outline-none" />
                </div>
                <div className='grid grid-cols-12 gap-10'>
                     {data?.map(item => (
                    <IteamCards key={item.id} item={item}></IteamCards>
                     
                ))}
                </div>
            </div>

            
           
            
        </div>
    );
};

export default ShopPage;