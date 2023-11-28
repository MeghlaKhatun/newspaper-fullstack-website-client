import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    console.log(details)
    const {_id,name}=details
    return (
        <div>
            <h2>hello:{name}</h2>
            <h2>hello:{_id}</h2>
        </div>
    );
};

export default Details;