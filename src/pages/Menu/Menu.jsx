import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";


const Menu = () => {
    const [menus, setMenus] = useState([])
    const [showSeeAllButton, setShowSeeAllButton] = useState(true);

    useEffect(() =>{
        fetch("/menu.json")
        .then(res => res.json())
        .then(data => setMenus(data.slice(0, 4)))
    },[])

    const seeAllHandler = () =>{
        fetch("/menu.json")
        .then(res => res.json())
        .then(data => setMenus(data))
        setShowSeeAllButton(false)
}

    return (
        <div id="menus" className="px-20 my-5">
            <h2 className='text-center text-4xl font-bold pt-5 px-5 mb-8  border-b-2 border-gray-500 lg:w-2/5 md:w-2/5 mx-auto'>Our Menu's</h2>
            <div className='mt-5'>
                {
                    menus?.map(menu => <SingleMenu
                        key={menu.id}
                        menu ={menu}></SingleMenu>)
                }
            </div>
            <div className='text-center'>
            {showSeeAllButton && (
              <button onClick={seeAllHandler} className='btn btn-outline-primary text-center'>See All Menus</button>
             )}
            </div>
        </div>
    );
};

export default Menu;