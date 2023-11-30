import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://newspaper-fullstack-website-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;