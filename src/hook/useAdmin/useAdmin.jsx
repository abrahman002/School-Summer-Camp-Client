import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin=()=>{
const {user}=useContext(AuthContext);
const [axiossecure]=useAxiosSecure()

const {data:isAdmin,isLoading:isAdminLoading}=useQuery({queryKey:['isAdmin',user?.email],
    queryFn:async()=>{
        const res = await axiossecure.get(`/users/admin/${user?.email}`)
        console.log(res)
        return res.data.admin;
    }
})
return [isAdmin,isAdminLoading]

}

export default useAdmin;