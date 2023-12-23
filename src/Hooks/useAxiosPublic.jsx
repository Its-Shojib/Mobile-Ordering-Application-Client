import axios from "axios";

let axiosPublic = axios.create({
    baseURL: 'https://mobile-ordering-application-server-mu.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;