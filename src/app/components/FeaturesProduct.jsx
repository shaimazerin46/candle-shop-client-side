import Headline from '@/components/Headline';
import React from 'react';
import IteamCards from './cards/IteamCards';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Button from '@/components/Button';
import Link from 'next/link';



const FeaturesProduct = async () => {

    const itemCollections = dbConnect(collectionNameObj.itemCollections)

    const data = await itemCollections.find().limit(8).toArray();

    return (
        <div className='max-w-6xl mx-auto pb-20'>
            <Headline text={"Our products"}></Headline>

            <div className='grid grid-cols-12 gap-10 mb-5'>
                {data?.map(item => (
                    <IteamCards key={item._id} item={item}></IteamCards>
                     
                ))}
            </div>

            <div className='flex justify-center mx-auto'>
               <Link href='/shop'> <Button text={"See more"}></Button></Link>
            </div>
        </div>
    );
};

export default FeaturesProduct;