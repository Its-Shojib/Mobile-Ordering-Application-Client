import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = () => {
    let axiosPublic = useAxiosPublic();
    const { data: mobileCollection = [], refetch } = useQuery({
        queryKey: ['mobileCollection'],
        queryFn: async () => {
            const res = await axiosPublic.get('/mobiles');
            return res.data;
        }
    })
    return [mobileCollection, refetch];
}
export default useLoadData;