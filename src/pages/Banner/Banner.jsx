import img1 from "../../assets/banner/img1.jpg"
import img2 from "../../assets/banner/img2.jpg"
import img3 from "../../assets/banner/img3.jpg"
import img4 from "../../assets/banner/img4.jpg"

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="carousel h-[550px]">
               <div id="item1" className="carousel-item relative w-full">
                 <img src={img1} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-3/5">
                   <h2 className="text-5xl font-bold">Flavors that Make You Feel at Home</h2>
                   <p className='font-semibold'>From the moment you step through our doors, you'll be transported to a world of delectable flavors and warm hospitality.</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div>
               <div id="item2" className="carousel-item relative w-full">
                 <img src={img2} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-3/5">
                   <h2 className="text-5xl font-bold">Flavors that Make You Feel at Home</h2>
                   <p className='font-semibold'>From the moment you step through our doors, you'll be transported to a world of delectable flavors and warm hospitality.</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item3" className="carousel-item relative w-full">
                 <img src={img3} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-3/5">
                   <h2 className="text-5xl font-bold">Flavors that Make You Feel at Home</h2>
                   <p className='font-semibold'>From the moment you step through our doors, you'll be transported to a world of delectable flavors and warm hospitality.</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item4" className="carousel-item relative w-full">
                 <img src={img4} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-3/5">
                   <h2 className="text-5xl font-bold">Flavors that Make You Feel at Home</h2>
                   <p className='font-semibold'>From the moment you step through our doors, you'll be transported to a world of delectable flavors and warm hospitality.</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
              
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-xs">1</a> 
                  <a href="#item2" className="btn btn-xs">2</a> 
                  <a href="#item3" className="btn btn-xs">3</a> 
                  <a href="#item4" className="btn btn-xs">4</a>
            </div>   
        </div>
    );
};

export default Banner;