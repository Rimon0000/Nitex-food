import About from "../About/About";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import Menu from "../Menu/Menu";
import Partners from "../Partners/Partners";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Menu></Menu>
            <PopularMenu></PopularMenu>
            <Partners></Partners>
            <ClientReview></ClientReview>
            
        </div>
    );
};

export default Home;