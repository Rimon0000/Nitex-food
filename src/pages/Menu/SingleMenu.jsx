

const SingleMenu = ({menu}) => {
    const {id, name, photo, description, price} = menu
    return (
        <div>
            <div className='lg:flex md:flex bg-slate-700 text-white mb-4 rounded'>
                <div className='lg:w-1/3 md:w-1/3'>
                    <img className='lg:w-4/5 md:w-4/5 rounded' src={photo} alt="" />
                </div>
                <div className='lg:w-2/3 md:w-2/3 py-2 mt-5 px-2'>
                    <h2 className=' text-2xl  border-b-2 border-gray-500 pb-2 font-bold'>{name}</h2>
                     <p className='font-semibold mt-1'>{description}</p>
                     <p className='font-semibold mt-2'>Price: {price}</p>
                </div>
            </div>
            
        </div>
    );
};

export default SingleMenu;