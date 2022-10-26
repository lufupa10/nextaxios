import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url, method) => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        (async ()=> {
            try {
                const response = await axios.request({
                    url,
                    method
                });
                
                setData(response.data);

            } catch(error){
                console.log(error)
            }
        })();

    }, [data])

    return {data}
}