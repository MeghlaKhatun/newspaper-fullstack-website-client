import { Helmet } from 'react-helmet-async';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';
import TrendingArticles from '../Trendings/TrendingArticles';
import Statistic from '../Statistic/Statistic';
import Plans from '../Plans/Plans';
import TopNews from '../TopNews/TopNews';
import ContactUs from '../ContactUs/ContactUs';
import AllPublisher from '../AllPublisher/AllPublisher';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setModalVisible(true);
        }, 10000);

        return () => clearTimeout(timeoutId);
    }, []);

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


            <div>
                {isModalVisible && (
                    <div className="modal">
                        <p>This is the modal content!</p>
                        <div>
                            <Link to={"/subscription"}>
                            <button className='btn btn-primary'>Click</button>
                            </Link>
                        </div>

                    </div>
                )}
            </div>


        </div>
    );
};

export default Home;