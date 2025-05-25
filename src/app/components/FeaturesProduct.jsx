import Headline from '@/components/Headline';
import React from 'react';
import IteamCards from './cards/IteamCards';
import dbConnect from '@/lib/dbConnect';



const FeaturesProduct = async () => {

    const itemCollections = dbConnect('items')

    const data = await itemCollections.find().toArray();

    return (
        <div className='max-w-6xl mx-auto pb-20'>
            <Headline text={"Our products"}></Headline>

            <div className='grid grid-cols-12 gap-10'>
                {data?.map(item => (
                    <IteamCards key={item.id} item={item}></IteamCards>
                     
                ))}
            </div>
        </div>
    );
};

export default FeaturesProduct;