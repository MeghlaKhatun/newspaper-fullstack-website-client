import { Helmet } from 'react-helmet-async';
import Navbar from '../../Pages/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Newspaper FullStack | Home
                </title>
            </Helmet>
    
            <Navbar></Navbar>
        </div>
    );
};

export default Home;