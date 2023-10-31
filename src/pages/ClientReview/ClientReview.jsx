import men1 from "../../assets/review/men1.jpg"
import men2 from "../../assets/review/men2.jpg"
import women1 from "../../assets/review/women1.jpg"
import women2 from "../../assets/review/women2.jpg"
import resturent from "../../assets/review/res.jpg"
import "./ClientReview.css"

const ClientReview = () => {
    return (
        <div className="my-10">
            <h2 className='text-center text-4xl font-bold pt-5 px-5 mb-8  border-b-2 border-gray-500 w-1/4 mx-auto'>client Review</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 px-5 pt-5'>
                <div className='mt-3' data-aos="fade-right" data-aos-duration="2000">
                    <div className='flex items-center gap-5'>
                        <img className='w-24 h-24 rounded-full' src={men1} alt="" />
                        <div className='text-sm font-semibold'>
                            <p>"I can't say enough good things about this toy store! The selection is amazing, 
                                and the staff is incredibly helpful. I found the perfect gift for my niece's birthday, 
                                and I'll definitely be back for more shopping."</p>
                            <p className="mt-1">Adrian || 27-9-2023</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 my-4'>
                        <img className='w-24 h-24 rounded-full' src={women1} alt="" />
                        <div className='text-sm font-semibold'>
                            <p>"The restaurant has a well-curated wine list and a creative cocktail menu. 
                                We tried their signature cocktails, and they were good, but not mind-blowing. 
                                A slight improvement in the cocktail department would make the overall dining 
                                experience even better."</p>
                            <p className="mt-1">James Taylor || 17-05-2023</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-24 h-24 rounded-full' src={men2} alt="" />
                        <div className='text-sm font-semibold'>
                            <p>"The service was generally attentive and friendly. Our server was knowledgeable 
                                about the menu and offered excellent recommendations. The only minor hiccup was a slight 
                                delay in getting our appetizers."</p>
                            <p className="mt-1">Liam Martin || 11-06-2023</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-24 h-24 rounded-full mt-4' src={women2} alt="" />
                        <div className='text-sm font-semibold'>
                            <p>"Tasty Bites boasts a warm and inviting atmosphere. The decor is stylish and modern, 
                                with a subtle touch of elegance. The dimmed lighting sets the perfect mood for a cozy meal."</p>
                            <p className="mt-1">Noah Clark || 20-7-2023</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <img className='rounded-lg zoomable-image' src={resturent} alt="" />
                </div>
            </div>   
        </div>
    );
};

export default ClientReview;