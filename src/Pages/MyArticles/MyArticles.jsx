import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyArticles = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [myArticles, setMyArticles] = useState([]);
    

    const { data: allArticles = [], refetch } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles');
            return res.data;
        }
    })

    useEffect(() => {
        const articleFilter = allArticles?.filter(myArticle => myArticle?.authorEmail == user?.email);
        setMyArticles(articleFilter)

    }, [allArticles, user?.email]);

    console.log( allArticles)

     //delete button
     const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/articles/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Article Delete successful",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className="max-w-7xl mx-auto my-6 px-5 lg:px-0">

                {
                    myArticles.length == 0 ? <p className="text-center font-bold text-xl">No Article found</p> :
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-black font-bold text-[16px]">

                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>IsPremium</th>
                                        <th>Details</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {
                                        myArticles?.map((article, index) => <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>{article.title}</th>
                                            {
                                                article?.status === "Approve" ?
                                                    <th>{article.status}</th>
                                                    :
                                                    <th>IsPending</th>
                                            }
                                            {
                                                article?.premium ?
                                                    <th>{article.premium}</th>
                                                    :
                                                    <th>Not Premium</th>

                                            }

                                            <td>

                                                <Link to={`/allArticles/${article._id}`}> <button
                                                    className="py-2 px-4 bg-yellow-900 text-white font-semibold rounded-lg">
                                                    Details
                                                </button></Link>

                                            </td>

                                            <td>
                                            <Link to={`/myArticles/updateArticles/${article._id}`}>
                                                <button
                                                    className="py-2 px-4 bg-yellow-900 text-white font-semibold rounded-lg">
                                                    Update
                                                </button>
                                            </Link>
                                            </td>

                                            <td>
                                                <button 
                                                    onClick={()=>handleDelete(article._id)}
                                                    className="py-2 px-4 bg-[#8a2121] text-white font-semibold rounded-lg">
                                                    <FaTrashAlt></FaTrashAlt>
                                                </button>
                                            </td>

                                        </tr>)
                                    }

                                </tbody>


                            </table>
                        </div>
                }

            </div>
        </div>
    );
};

export default MyArticles;