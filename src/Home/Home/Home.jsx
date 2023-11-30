import { Helmet } from 'react-helmet-async';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';
import TrendingArticles from '../Trendings/TrendingArticles';
import Statistic from '../Statistic/Statistic';
import Plans from '../Plans/Plans';
import TopNews from '../TopNews/TopNews';
import ContactUs from '../ContactUs/ContactUs';
import AllPublisher from '../AllPublisher/AllPublisher';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Newspaper FullStack | Home
                </title>
            </Helmet>
    
            <Navbar></Navbar>
            <TrendingArticles></TrendingArticles>
            <AllPublisher></AllPublisher>
            <Statistic></Statistic>          
            <Plans></Plans>
            <TopNews></TopNews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;