import About from "../About/About";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Menu></Menu>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Home;