import Headline from '@/components/Headline';
import React from 'react';
import IteamCards from './cards/IteamCards';



const FeaturesProduct = async () => {

    const data = [
        {
            "id": 1,
            "category": "flower",
            "name": "Peony Bloom",
            "image": "https://i.ibb.co/4nt5BTQH/peonybloom.jpg",
            "description": "Delicate peony petals blended with floral oils for a relaxing, garden-fresh ambiance.",
            "flavour": "scented",
            "price": 1700
        },
        {
            "id": 2,
            "category": "flower",
            "name": "Flower Haven",
            "image": "https://i.ibb.co/YYXPpMx/flower.jpg",
            "description": "An elegant floral bouquet scent that transforms your space into a peaceful retreat.",
            "flavour": "scented",
            "price": 1500
        },
        {
            "id": 3,
            "category": "flower",
            "name": "Green Cactus",
            "image": "https://i.ibb.co/MkK6nMkP/cactus.jpg",
            "description": "Fresh and earthy tones of cactus and aloe, ideal for minimal and nature-inspired settings.",
            "flavour": "basic",
            "price": 1000
        },
        {
            "id": 4,
            "category": "fruit",
            "name": "Lemon Spice",
            "image": "https://i.ibb.co/vSY20cb/Aromatherapy.jpg",
            "description": "A zesty lemon twist paired with warm spices to energize and refresh your mood.",
            "flavour": "scented",
            "price": 1100
        },
        {
            "id": 5,
            "category": "love",
            "name": "Bow Candle Set",
            "image": "https://i.ibb.co/tPYysxV6/bow.jpg",
            "description": "Charming and romantic, this bow-tied candle set adds a soft, cozy touch to your evenings.",
            "flavour": "basic",
            "price": 900
        }
    ]

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