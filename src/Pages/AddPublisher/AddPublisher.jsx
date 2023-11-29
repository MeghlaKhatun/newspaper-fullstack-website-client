import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axiosPublic";
import Navbar from "../Navbar/Navbar";

//image hosting key
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPublisher = () => {

    const axiosPublic = useAxiosPublic()
    const handlePublisher=async (e)=>{
        e.preventDefault();
        const form = e.target;
        const publisherName = form.name.value;
        const file = form.file.files[0];
        console.log(publisherName,file)

        const imageFile = { image: file }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)

        const publisherLogo = res.data.data.display_url
        const addPublisher = {publisherName, publisherLogo }
        // Post data
        fetch("http://localhost:5000/publisher", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPublisher)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Publisher added successfully',
                        'success'
                    );
                }

            })


    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="max-w-3xl mx-auto my-10">

                    <form className='px-10' onSubmit={handlePublisher} >
                        <div className="form-control pt-2 ">
                            <label className="label">
                                <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Publisher Name</span>
                            </label>
                            <input type="text" name="name" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Name" required />
                        </div>

                        <div className="form-control pt-2">
                            <label className="label">
                                <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Publisher Logo</span>
                            </label>
                            <input type="file" name="file" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" placeholder="Publisher Name" required />
                        </div>

                        <div className='pt-6'>
                            <input type="submit" value="Submit" className="py-3 cursor-pointer md:font-bold  btn-block border bg-[#8a2121] text-white" />
                        </div>





                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddPublisher;