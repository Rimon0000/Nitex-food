import Marquee from "react-fast-marquee";
import img1 from "../../assets/partners/img1.jpg"
import img2 from "../../assets/partners/img2.jpg"
import img3 from "../../assets/partners/img3.jpg"
import img4 from "../../assets/partners/img4.jpg"
import img5 from "../../assets/partners/img5.jpg"
import img6 from "../../assets/partners/img6.jpg"
import img7 from "../../assets/partners/img7.jpg"
import img8 from "../../assets/partners/img8.jpg"

const Partners = () => {
    return (
        <div className="my-10">
            <h2 className='text-center text-4xl font-bold pt-5 px-5 mb-8  border-b-2 border-gray-500 w-1/4 mx-auto'>Our Partners</h2>
            <div className='d-flex'>
              <Marquee className='text-danger' speed={100}>
                <div className="card w-80 bg-base-100 shadow-xl">
                   <figure><img src={img1} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">macdonald's</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-9">
                   <figure><img src={img2} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">DONUTS's</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                   <figure><img src={img3} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">Zalando</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-9">
                   <figure><img src={img4} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">CASKA TELEVISE</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                   <figure><img src={img5} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">NBC ONE</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-9">
                   <figure><img src={img6} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">Coffee's World</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                   <figure><img src={img7} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">Canon</h2>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-9">
                   <figure><img src={img8} alt="Shoes" /></figure>
                   <div className="mt-3">
                       <h2 className="text-center font-bold">MOSLER</h2>
                    </div>
                </div>
               
              </Marquee>
            </div> 
            
        </div>
    );
};

export default Partners;