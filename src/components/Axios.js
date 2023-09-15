
import React, {useEffect,useState} from "react";
import axios from "axios";

const Axios = () => {
    const[Data, setData]= useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users"). then((response) =>{
            setData(response.data);

        });
    },[]);

return(
    <div className="text-center mt-9">
        {Data.map((data)=>{
            return(
                <div>
                {`${data.id} UserName: ${data.name} email:${data.email}`}
                </div>
            )

        })

         
        }
    </div>
)};
export default Axios;