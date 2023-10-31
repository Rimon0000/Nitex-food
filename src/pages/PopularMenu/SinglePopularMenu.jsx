import { FaRegThumbsUp, FaStar, FaStarHalfAlt } from "react-icons/fa";


const SinglePopularMenu = ({popular}) => {
    const {id, title, photo, likes, rating} = popular
    return (
        <div className='border border-primary bg-light rounded-lg' data-aos="fade-up" data-aos-duration="2000">
           <div className='flex gap-10 mb-4 rounded'>
                <div className='w-1/4'>
                    <img className=' rounded-lg text-center m-3 pt-2' src={photo} alt="" />
                </div>
                <div className='w-3/4 py-2'>
                    <h3 className='text-xl font-bold border-b-2 border-gray-500 pb-2'>{title}</h3>
                     <div className='flex items-center gap-10 font-semibold pt-2'>
                        <p className="flex items-center	"><FaRegThumbsUp />: {likes} Likes</p>
                        <div className='flex items-center justify-between gap-3 my-2'>
                              <div className="flex items-center	">
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStarHalfAlt></FaStarHalfAlt>
                              </div>
                              <div>
                                <p className='pt-rating'>{rating}</p>
                              </div>
                        </div>
                     </div>
                     <button className="btn btn-outline btn-sm btn-primary mt-2">View Details</button>
                </div>
            </div>  
        </div>
    );
};

export default SinglePopularMenu;