import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";


const UpdateArticle = () => {

    const updateArticles = useLoaderData();
   const {_id,image, authorName, authorEmail, tag, title, description, authorProfile, publisher, date } =updateArticles

   const handleUpdateArticle= e => {
    e.preventDefault();
    const form = e.target;
        const authorName = form.authorName.value;
        const authorEmail = form.authorEmail.value;
        const authorProfile = form.authorProfile.value;
        const image = form.image.value;
        const tag = form.tag.value;
        const title = form.title.value;
        const publisher = form.publisher.value;
        const date = form.date.value;
        const description = form.description.value;
        
    const updateService = {authorName, authorEmail, tag,image, title,  authorProfile, publisher, date,description}
    // send data
    fetch(`https://newspaper-fullstack-website-server-side.vercel.app/articles/${_id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updateService)
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
        <div>
            <Navbar></Navbar>

            <div className="max-w-5xl mx-auto">
                <div>
                    {/* input form */}

                    <form onSubmit={handleUpdateArticle} className=" w-full py-10 px-10 ">

                        {/*User name and email */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Name</span>
                                </label>
                                <input type="text" name="authorName" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={authorName} readOnly required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Email</span>
                                </label>
                                <input type="email" name="authorEmail" className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" defaultValue={authorEmail} readOnly required />
                            </div>

                        </div>


                        {/*Publisher profile and photo */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">User Profile</span>
                                </label>
                                <input type="text" name="authorProfile" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={authorProfile} readOnly required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Photo URL</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black" placeholder="Publisher Name" required />
                            </div>

                        </div>


                        {/* Tags and title */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1 border-none outline-none">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Tags</span>
                                </label>
                                <input type="text" name="tag" defaultValue={tag} className=" border-2 pl-3 py-1 input-bordered outline-none border-[#8a2121] text-black"  required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Title</span>
                                </label>
                                <input type="text" name="title" defaultValue={title} className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Article Title" required />
                            </div>

                        </div>

                        {/*publisher and date */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1 border-none outline-none">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Publisher</span>
                                </label>
                                <input type="text" name="publisher" defaultValue={publisher} className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Article Title" required />
                            </div>

                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Date</span>
                                </label>
                                <input type="date" name="date" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={date} required />
                            </div>

                        </div>


                        {/* description */}

                        <div className="mb-8">
                            <div className="form-control pt-2">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Description</span>
                                </label>
                                <textarea name="description" id="" cols="35" rows="5" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" defaultValue={description}></textarea>
                            </div>
                        </div>

                        <input type="submit" value="Add Article" className="py-3 cursor-pointer md:font-bold  btn-block border bg-[#8a2121] text-white" />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateArticle;