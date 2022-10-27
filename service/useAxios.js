import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { AxiosContext } from "../context/context";

export const useAxios = (url, method) => {
    const [data, setData] = useState(null);
    const contextInstance = useContext(AxiosContext);

  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);

    useEffect(()=> {
        (async ()=> {
            try {
                const response = await instance.request({
                    url,
                    method
                });
                
                setData(response.data);

            } catch(error){
                console.log(error)
            }
        })();

    }, [])

    return {data}
}