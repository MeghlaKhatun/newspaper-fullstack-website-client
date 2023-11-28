import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Navbar from "../../Pages/Navbar/Navbar";
import Swal from "sweetalert2";

const AllUser = () => {


    const axiosSecure = useAxiosSecure();

    const { data: user = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto my-6 px-5 lg:px-0">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th></th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                user?.map((user, index) => <tr key={index}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} />
                                                </div>

                                            </div>
                                        </div>
                                    </td>

                                    <th>{user.name}</th>
                                    <th>{user.email}</th>

                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={()=>handleMakeAdmin(user)}
                                                    className="btn btn-ghost btn-sm bg-gray-500 text-black">
                                                    Make Admin
                                                </button>
                                        }
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;