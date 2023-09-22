import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            try {

                const response = await axiosSecure.get(`/users/admin/${user?.email}`)
                return response.data.admin;

            } catch (error) {
                throw error
            }
        }
    })

    return [isAdmin,isAdminLoading]

}

export default useAdmin;