
import { useEffect, useState } from "react";
import AllArticle from './AllArticle';
import Navbar from '../Navbar/Navbar';
import InfiniteScroll from "react-infinite-scroll-component";

const AllArticles = () => {
    const [articles,setArticles]=useState([])
    const [page,setPage] =useState(1);
    // console.log("article",articles)
    // const [showLoader,setShowLoader] = useState(false)
    const [filteredData, setFilteredData] = useState([]);
    const itemParPage = 3;

    const fetchMoreData =()=>{
        const newData = articles.slice(0,page*itemParPage)
        setFilteredData(newData)
        setPage(page + 1)
    }

    useEffect(()=>{
        fetch("http://localhost:5000/articles")
        .then(res => res.json())
        .then(data => {
            setArticles(data);
            // console.log(data);
        })
        .catch(err => {
            console.log(err);
        })


        fetchMoreData();
        // setShowLoader(true)

    },[fetchMoreData])
    
    
    return (
        <div >
            <Navbar></Navbar>
        <InfiniteScroll
        dataLength={filteredData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading....</h4>}
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 my-10 px-10 lg:px-0'>
                {
                    filteredData?.map(data=> <AllArticle key={data._id} data={data}></AllArticle>)
                }
            </div>

        </InfiniteScroll>
        </div>
    );
};
export default AllArticles;



