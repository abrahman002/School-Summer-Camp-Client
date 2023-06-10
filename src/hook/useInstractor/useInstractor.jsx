import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useInstractor=()=>{
const {user}=useContext(AuthContext);
const [axiossecure]=useAxiosSecure()

const {data:isInstractor,isLoading:isInstractorLoading}=useQuery({queryKey:['isInstractor',user?.email],
    queryFn:async()=>{
        const res = await axiossecure.get(`/users/instractor/${user?.email}`)
        console.log(res)
        return res.data.instractor;
    }
})
return [isInstractor,isInstractorLoading]

}

export default useInstractor;