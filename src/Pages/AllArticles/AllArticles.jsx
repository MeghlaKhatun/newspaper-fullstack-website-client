
// import { useEffect, useState } from "react";
// import AllArticle from './AllArticle';
// import Navbar from '../Navbar/Navbar';
// import InfiniteScroll from "react-infinite-scroll-component";

// const AllArticles = () => {
//     const [articles, setArticles] = useState([])
//     const [page, setPage] = useState(1);
//     // console.log("article",articles)
//     // const [showLoader,setShowLoader] = useState(false)
//     const [filteredData, setFilteredData] = useState([]);
//     const itemParPage = 3;

//     const fetchMoreData = () => {
//         const newData = articles.slice(0, page * itemParPage)
//         setFilteredData(newData)
//         setPage(page + 1)
//     }

//     useEffect(() => {
//         fetch("http://localhost:5000/articles")
//             .then(res => res.json())
//             .then(data => {
//                 setArticles(data);
//                 // console.log(data);
//             })
//             .catch(err => {
//                 console.log(err);
//             })


//         fetchMoreData();
//         // setShowLoader(true)

//     }, [fetchMoreData]);

//     const [filteredAllCards, setFilteredCards] = useState([]);


//     const handleSearch = (e) => {
//         e.preventDefault();
//         const search = e.target.text.value.trim().toLowerCase();
//         const filter = articles.filter(
//             (allCard) =>
//                 allCard.service_name.toLowerCase().indexOf(search) !== -1
//         );
//         setFilteredCards(filter);
//     };


//     return (
//         <div >
//             <Navbar></Navbar>
//             <InfiniteScroll
//                 dataLength={filteredData.length}
//                 next={fetchMoreData}
//                 hasMore={true}
//                 loader={<h4 className="text-center">Loading....</h4>}
//             >

//                 <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-20 px-10">
//                     {/* search section */}
//                     <form onSubmit={handleSearch} className="mx-auto">
//                         <div className="mt-10">
//                             <input
//                                 className="text-black border outline-none rounded-lg md:rounded-full py-3 md:py-4 pl-4 pr-[40px] md:pr-[200px] lg:pr-[350px]"
//                                 type="text"
//                                 placeholder="Search here...."
//                                 name="text"
//                                 id=""
//                             />
//                         </div>
//                         <div className="md:absolute mt-4 md:mt-[-57px] flex justify-center  md:ml-[300px] lg:ml-[450px]">
//                             <input
//                                 className="bg-[#009688] text-[16px] font-semibold py-2 md:py-4 px-10 cursor-pointer text-white rounded-lg md:rounded-r-full "
//                                 type="submit"
//                                 value="Search"
//                             />
//                         </div>
//                     </form>
//                 </div>


//                 <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 my-10 px-10 lg:px-0'>
//                     {
//                         filteredAllCards?.map(data => <AllArticle key={data._id} data={data}></AllArticle>)
//                     }
//                 </div>


//             </InfiniteScroll>
//         </div>
//     );
// };
// export default AllArticles;










import { useLoaderData } from "react-router-dom";
import AllArticle from './AllArticle';
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const AllServices = () => {
    const allArticles = useLoaderData();

    const [filteredAllArticles, setFilteredArticles] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.text.value.trim().toLowerCase();
        const filter = allArticles.filter(
            (allCard) =>
                allCard.title.toLowerCase().indexOf(search) !== -1
        );
        setFilteredArticles(filter);
    };

    useEffect(() => {
        setFilteredArticles(allArticles);
    }, [allArticles]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 my-10 px-10">
                {/* search section */}
                <form onSubmit={handleSearch} className="mx-auto">
                    <div className="mt-10">
                        <input
                            className="text-black border outline-none rounded-lg py-3 md:py-4 pl-4 pr-[40px] md:pr-[200px] lg:pr-[350px]"
                            type="text"
                            placeholder="Search here...."
                            name="text"
                            id=""
                        />
                    </div>
                    <div className="md:absolute mt-4 md:mt-[-57px] flex justify-center  md:ml-[300px] lg:ml-[450px]">
                        <input
                            className="bg-[#8a2121] text-[16px] font-semibold py-2 md:py-4 px-10 cursor-pointer text-white rounded-r-none md:rounded-r-lg "
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
            </div>

            {/* all service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 my-10 px-10 lg:px-0">
                {filteredAllArticles?.map((data) => (
                    <AllArticle key={data._id} data={data}></AllArticle>
                ))}
            </div>

        </div>
    );
};

export default AllServices;




