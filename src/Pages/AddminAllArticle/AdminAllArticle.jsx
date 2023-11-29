import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";

const AdminAllArticle = () => {


    const axiosSecure = useAxiosSecure();

    const { data: articles = [], refetch } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await axiosSecure.get('/articles');
            return res.data;
        }
    })


    //approve button
    const handleApprove = (articles) => {
        axiosSecure.patch(`/articles/approve/${articles._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${articles.title}  Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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

    //premium button
    const handlePremium = (premium) => {
        axiosSecure.patch(`/articles/premium/${premium._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Premium",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="max-w-7xl mx-auto my-10 px-10 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        articles?.map((article, index) => <div key={index}>

                            <div>
                                <div className=" bg-base-100 md:h-[570px] shadow-2xl">
                                    <div className="px-10 pt-10 w-1/2 mx-auto">
                                        <img src={article.authorProfile} alt="Shoes" className="rounded-full w-full" />
                                    </div>
                                    <div className="card-body  ">
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Title: </span> {article.title}</h2>
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Name: </span> {article.authorName}</h2>
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Email: </span> {article.authorEmail}</h2>
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Publisher: </span> {article.publisher}</h2>
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Status: </span> {article.status}</h2>
                                        <h2 className="text-[16px] font-medium"><span className='font-bold text-[18px]'>Date: </span> {article.date}</h2>
                                        <div className="mt-2 flex gap-6 items-center">
                                            {
                                                article?.status === 'Approve' ? <div className="py-2 disabled px-4 bg-gray-200 text-black font-semibold text-center rounded-lg">Approved</div> :
                                                    <button
                                                        onClick={() => handleApprove(article)}
                                                        className="py-2 px-4 bg-green-900 text-white font-semibold rounded-lg">
                                                        Approve
                                                    </button>
                                            }

                                            {/* decline button and modal */}
                                            <div>

                                                <div>
                                                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="py-2 px-4 bg-[#8a2121] text-white font-semibold rounded-lg cursor-pointer">Decline</button>
                                                </div>

                                                <dialog id="my_modal_3" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>

                                                        {/* main form */}

                                                        <form>
                                                            <div className="form-control pt-2 flex-1">
                                                                <textarea name="instruction" id="" cols="20" rows="5" placeholder="description" className="border-2 rounded-lg outline-none p-2 text-black"></textarea>
                                                            </div>

                                                            <div className="flex items-center justify-center mt-4">
                                                                <input value="Submit" type="submit" className="py-2 px-4 bg-[#8a2121] text-white font-semibold rounded-lg cursor-pointer" />
                                                            </div>

                                                        </form>
                                                    </div>
                                                </dialog>
                                            </div>


                                        </div>
                                        <div className="mt-2 flex gap-6 items-center">

                                        {
                                                article?.premium === 'Premium' ? <div className="py-2 disabled px-4 bg-gray-200 text-black font-semibold text-center rounded-lg">Premium</div> :
                                                    <button
                                                        onClick={() => handlePremium(article)}
                                                        className="py-2 px-4 bg-green-900 text-white font-semibold rounded-lg">
                                                        MakePremium
                                                    </button>
                                            }

                                            <button onClick={()=>handleDelete(article._id)} className="py-2 px-4 bg-[#8a2121] text-white font-semibold rounded-lg">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminAllArticle;