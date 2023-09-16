import Axios from "axios";
import {useState,useEffect} from "react";
import "../index.css";

export default function ListData(){
    const [data,setData]=useState([]);

    useEffect((res)=>{
        Axios.get("http://localhost:8000/listdata")
        .then((res)=>{setData(res.data)})
    },[])

    return(
        <>
        <div className="post-sorting"> 
        {
            data.map((item)=>{ 
                return <div className="post" key={item.id}>
                
                <div className="post-header">
                <img className="profile-image" src="./images/p1.webp" alt="Profile Image" />
                  <div><h2 className="name">Hassan</h2>
                  <p className="title">{item.title}</p>
                  </div>
                </div>
                <div >
                  <img className="post-image" src="./images/1.jpeg" alt="Post Image" />
                  </div>
              </div>
                  
            })
        }
        </div>
        </>
    )
}