import Button from "@/components/Button";
import banner from "@/../public/images/banner.png"


const HeroSection = () => {
    return (
        <div 
        style={{
                backgroundImage: `linear-gradient(rgba(134, 84, 57, 0.4), rgba(134, 84, 57, 0.3)), url(${banner.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        className='h-[500px] flex justify-center items-center' >
            <div className='text-white text-center space-y-6'>
                <h3>Where Light Meets Luxury</h3>
            <p className='text-5xl'>Indulge in the warmth of natural fragrance </p>
            <div className='flex justify-center items-center'>
                <Button text={"Find Your Scent"}></Button>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;