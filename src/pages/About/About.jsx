
import about1 from "../../assets/about/img1.jpg"
import about2 from "../../assets/about/img2.jpg"
import about3 from "../../assets/about/img3.jpg"

const About = () => {
    return (    
        <div className='mx-auto text-center px-14 mt-5'>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-8'>About Us</h2>
            <div className='lg:flex md:flex gap-14'>
                <div className='rounded w-3/5' data-aos="fade-right" data-aos-duration="2000">
                    <img className='lg:w-3/5 md:w-3/5 relative rounded lg:left-36 md:left-36 mt-4' src={about3} alt="" />
                    <div className='lg:flex md:flex gap-5 relative lg:bottom-20 md:bottom-20'>
                        <img className='lg:w-2/4 md:w-2/4 rounded' src={about1} alt="" />
                        <img className='lg:w-2/4 md:w-2/4 rounded' src={about2} alt="" />
                    </div>
                </div>
                <div className='lg:w-2/5 md:w-2/5' data-aos="fade-left" data-aos-duration="2000">
                    <h2 className='text-2xl font-bold mb-5'>Welcome to Grand Sikhder</h2>
                    <p className='text-justify font-semibold px-2'>Grand Sikder Restaurant is a harmonious fusion of tradition and 
                    innovation. We honor Chittagong's culinary heritage while embracing contemporary trends, 
                    making us the ideal destination for connoisseurs from all walks of life. Our passion for 
                    authentic flavors is matched only by our commitment to delivering a dining experience 
                    that goes beyond the ordinary. <br /> <br />
                        
                    The moment you step through our doors, you'll be transported to a haven of elegance and charm. 
                    The ambiance of our restaurant exudes an irresistible warmth, setting the stage for 
                    family gatherings, romantic rendezvous, and jubilant celebrations. Our attentive and 
                    friendly staff ensures that every visit is an experience to remember.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;