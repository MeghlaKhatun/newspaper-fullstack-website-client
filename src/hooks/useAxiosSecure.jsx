import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://newspaper-fullstack-website-server-side.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;