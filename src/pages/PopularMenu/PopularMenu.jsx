import { useEffect, useState } from "react";
import SinglePopularMenu from "./SinglePopularMenu";


const PopularMenu = () => {
    const [popularMenus, setPopularMenus] = useState([])

    useEffect(()=>{
        fetch('/popularMenu.json')
        .then(res => res.json())
        .then(data => setPopularMenus(data))
    },[])

    return (
        <div className="px-10">
            <h2 className='text-center text-4xl font-bold pt-5 px-5 mb-8 pb-2  border-b-2 border-gray-500 w-2/5 mx-auto'>Most Popular Menu</h2>
            <div className='grid grid-cols-2 gap-5'>
                {
                    popularMenus.map(popular => <SinglePopularMenu
                    key={popular.id}
                    popular={popular}
                    ></SinglePopularMenu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;