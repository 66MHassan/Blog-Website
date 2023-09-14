import Axios from "axios";
import {useState,useEffect} from "react";

export default function ListData(){
    const [data,setData]=useState([]);

    useEffect((res)=>{
        Axios.get("http://localhost:8000/listdata")
        .then((res)=>{setData(res.data)})
    },[])

    return(
        <>
        {
            data.map((item)=>{
                return <ul key={item.id}>
                    <li>{item.id}</li>
                    <li>{item.title}</li>
                    <li>{item.content}</li>
                    <li>{item.tags}</li>

                </ul>
            })
        }
        </>
    )
}