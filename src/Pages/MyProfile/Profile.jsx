import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Profile = ({ user }) => {

    const { _id, email, name, photo } = user;

    const handleUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.authorName.value;
        const email= form.authorEmail.value;
        const photo = form.authorProfile.value

        console.log(name,email,photo)

        const updateUser = { name,email,photo }
        //send data
        fetch(`https://newspaper-fullstack-website-server-side.vercel.app/user/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Update!',
                        'Data Updated successful!',
                        'success'
                    )
                }

            })
    }

    return (
        <div className="max-w-3xl mx-auto my-10">


            <div className="card w-96 mx-auto mt-8">
                <div className="px-10 pt-10 w-1/2 mx-auto">
                    <img src={photo} alt="Shoes" className="rounded-full w-full" />
                </div>

            </div>


            <form className='px-10' onSubmit={handleUser}>
                <div className="form-control pt-2 ">
                    <label className="label">
                        <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Name</span>
                    </label>
                    <input type="text" name="authorName" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={name} required />
                </div>

                <div className="form-control pt-2 ">
                    <label className="label">
                        <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Email</span>
                    </label>
                    <input type="email" name="authorEmail" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" defaultValue={email} required />
                </div>

                <div className="form-control pt-2 ">
                    <label className="label">
                        <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Photo URL</span>
                    </label>
                    <input type="text" name="authorProfile" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" defaultValue={photo} required />
                </div>

                <div className='pt-6'>
                    <input type="submit" value="Update User" className="py-3 cursor-pointer md:font-bold  btn-block border bg-[#8a2121] text-white" />
                </div>





            </form>





        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.object,
};

export default Profile;