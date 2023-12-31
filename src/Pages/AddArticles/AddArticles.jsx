import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axiosPublic";
import Navbar from "../Navbar/Navbar";
import Select from 'react-select';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddArticles = () => {

    const { user } = useContext(AuthContext);

    const publisher = [
        { value: 'meghla', label: 'Meghla' },
        { value: 'mannatun', label: 'Jannatun' },
        { value: 'mawya', label: 'Mawya' },
        { value: 'parvin', label: 'Parvin' },
    ]

    const options = [
        { value: 'politics', label: 'Politics' },
        { value: 'international', label: 'International' },
        { value: 'environment', label: 'Environment' },
        { value: 'business', label: 'Business' },
        { value: 'technology', label: 'Technology' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
    ]

    const axiosPublic = useAxiosPublic()

    const handleAddArticles = async (e) => {
        e.preventDefault();
        const form = e.target;
        const authorName = form.authorName.value;
        const authorEmail = form.authorEmail.value;
        const authorProfile = form.authorProfile.value;
        const file = form.file.files[0];
        const tag = form.tag.value;
        const title = form.title.value;
        const publisher = form.publisher.value;
        const date = form.date.value;
        const description = form.description.value;

        console.log(authorName, authorEmail, tag, title, description, authorProfile, publisher, date);


        const imageFile = { image: file }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        console.log(res.data.data.display_url)

        const image = res.data.data.display_url
        const addArticle = { image, authorName, authorEmail, tag, title, description, authorProfile, publisher, date }
        // Post data
        fetch("https://newspaper-fullstack-website-server-side.vercel.app/articles", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addArticle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Article added successfully',
                        'success'
                    );
                }

            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="max-w-5xl mx-auto">
                <div>
                    {/* input form */}

                    <form onSubmit={handleAddArticles} className=" w-full py-10 px-10 ">

                        {/*User name and email */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Name</span>
                                </label>
                                <input type="text" name="authorName" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={`${user?.displayName}`} readOnly required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Email</span>
                                </label>
                                <input type="email" name="authorEmail" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" defaultValue={`${user?.email}`} readOnly required />
                            </div>

                        </div>


                        {/*Publisher profile and photo */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Profile</span>
                                </label>
                                <input type="text" name="authorProfile" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={`${user?.photoURL}`} readOnly required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Chose Photo</span>
                                </label>
                                <input type="file" name="file" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" placeholder="Publisher Name" required />
                            </div>

                        </div>


                        {/* Tags and title */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1 border-none outline-none">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Tags</span>
                                </label>
                                <Select
                                    required
                                    defaultValue={[options[1]]}
                                    isMulti
                                    name="tag"
                                    options={options}
                                    className="basic-multi-select  border-2 pl-3 py-[2px] h-full w-full outline-none focus:outline-none focus:ring-0 border-[#8a2121] text-black"
                                    classNamePrefix="select"
                                />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Title</span>
                                </label>
                                <input type="text" name="title" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Article Title" required />
                            </div>

                        </div>

                        {/*publisher and date */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1 border-none outline-none">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Publisher</span>
                                </label>
                                <Select
                                    required
                                    defaultValue={[publisher[1]]}
                                    name="publisher"
                                    options={publisher}
                                    className="basic-multi-select  border-2 pl-3 py-[2px] h-full w-full outline-none focus:outline-none focus:ring-0 border-[#8a2121] text-black"
                                    classNamePrefix="select"
                                />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Date</span>
                                </label>
                                <input type="date" name="date" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Article Title" required />
                            </div>

                        </div>


                        {/* description */}

                        <div className="mb-8">
                            <div className="form-control pt-2">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Description</span>
                                </label>
                                <textarea name="description" id="" cols="35" rows="5" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Description"></textarea>
                            </div>
                        </div>

                        <input type="submit" value="Add Article" className="py-3 cursor-pointer md:font-bold  btn-block border bg-[#8a2121] text-white" />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddArticles;