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


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="max-w-5xl mx-auto my-6 px-5 lg:px-0">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-black font-bold text-[16px]">

                                    <th>No</th>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    articles?.map((news, index) => <tr key={index}>
                                        <th>{index + 1}</th>

                                        <td>
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className="w-full h-full " src={news.image} />
                                            </div>
                                        </td>

                                        <th>{news.name}</th>
                                        <th>{news.tag}</th>

                                        <td>
                                            {
                                                news.status === 'Approve' ? <p className="font-bold">Approved</p> :
                                                    <button
                                                        onClick={() => handleApprove(news)}
                                                        className="py-2 px-4 bg-[#8a2121] text-white font-semibold rounded-lg">
                                                        Approve
                                                    </button>
                                            }
                                        </td>

                                    </tr>)
                                }

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAllArticle;