// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Select from 'react-select';

const AddArticles = () => {

    const options = [
        { value: 'politics', label: 'Politics' },
        { value: 'business', label: 'Business' },
        { value: 'technology', label: 'Technology' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
      ]


      const handleAddArticles = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const file = form.file.value;
        const article = form.article.value;
        const title = form.title.value;
        const description = form.description.value;

        console.log(name, article,file,title , description);
        // const addService = { name, email, image, service_name, area, price, description,profile }
        // //send data
        // fetch("https://ass-crud-and-jwt-server.vercel.app/service", {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addService)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire(
        //                 'Success!',
        //                 'Service added successfully',
        //                 'success'
        //             );
        //         }

        //     })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="max-w-5xl mx-auto">
                <div>
                    {/* input form */}
                    <form onSubmit={handleAddArticles} className=" w-full py-10 px-10 ">


                        {/* name and image */}
                        <div className="md:flex gap-6 w-full">
                            <div className="form-control pt-2 flex-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#8a2121] text-[16px] md:text-[18px]">Publisher Name</span>
                                </label>
                                <input type="text" name="name" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Publisher Name" required />
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
                                    defaultValue={[options[1]]}
                                    isMulti
                                    name="article"
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


                        {/* description */}

                        <div className="mb-8">
                            <div className="form-control pt-2">
                                <label className="label">
                                    <span className="label-text font-semibold text-white text-[16px] md:text-[18px]">Description</span>
                                </label>
                                <textarea name="description" id="" cols="35" rows="5" className=" border-2 pl-3 py-2 input-bordered outline-none border-[#8a2121] text-black" placeholder="Description"></textarea>
                            </div>
                        </div>

                        <input type="submit" value="Add Article" className="py-3 cursor-pointer md:font-bold hover:text-[#8a2121] hover:border-2 hover:border-[#8a2121] hover:bg-white btn-block border bg-[#8a2121] text-white" />

                    </form>



                </div>
            </div>

        </div>
    );
};

export default AddArticles;