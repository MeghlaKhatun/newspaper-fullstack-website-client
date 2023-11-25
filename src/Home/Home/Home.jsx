import { Helmet } from 'react-helmet-async';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';
import TrendingArticles from '../Trendings/TrendingArticles';

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
            <Footer></Footer>
        </div>
    );
};

export default Home;