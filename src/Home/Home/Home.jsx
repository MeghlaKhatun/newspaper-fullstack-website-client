import { Helmet } from 'react-helmet-async';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Newspaper FullStack | Home
                </title>
            </Helmet>
    
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Home;