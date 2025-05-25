import Button from "@/components/Button";
import Image from "next/image";
import about1 from '../../../public/images/about1.jpg'
import about2 from '../../../public/images/about2.jpg'
import Link from "next/link";


 

const About = () => {
    return (
        <div className="max-w-6xl mx-auto pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* text */}
                <div className="items-center w-1/2">
                    <h4 className="italic secondary">The art of light</h4>
                    <h2 className="text-4xl py-5">Our handmade collections</h2>
                    <p className="w-full secondary pb-5">
                        At our core, we believe in the magic of light and scent to transform everyday moments into something beautiful. Every candle we create is lovingly handmade, using natural, eco-friendly ingredients and thoughtfully chosen fragrances that soothe, inspire, and uplift. 
                    </p>
                    <Link href='/shop'> <Button text={"Find Your Scent"}></Button></Link>
                </div>
                {/* image */}

                <div className="mr-0 flex justify-end">
                    <Image src={about1} alt="Candle image"></Image>
                </div>

            </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* image */}

                <div className="mr-0 flex justify-end">
                    <Image src={about2} alt="Candle image"></Image>
                </div>
                {/* text */}
                <div className="space-y-5 items-center w-1/2">
                    <h4 className="italic secondary">Illuminate Every Moment</h4>
                    <h2 className="text-4xl">Discover aromatic candles</h2>
                    <p className="w-full secondary pb-5">
                       From floral elegance to fruity freshness and dessert-like indulgence, our collections are crafted to reflect your moods and memories. More than just candles, they are pieces of art—poured with care, designed with intention, and made to fill your space with warmth and meaning. Welcome to a world where light meets soul.
                    </p>
                    <Link href='/shop'><Button text={'Find your scent'}></Button></Link>
                </div>
                

            </div>
        </div>
    );
};

export default About;