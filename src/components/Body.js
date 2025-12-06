import ResCard from "./ResCard";
import {resList} from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const [resData,setResList]=useState(resList);
    return (
        <div className="body-container">
            <button className="flter-btn" 
            onClick={()=>{
                const filterdList=resList.filter((res)=>res.avgRating>4);
                setResList(filterdList);
                console.log("button clicked");
            }}>
                filter
            </button>
            <div className="res-list">
                {
                    resData.map((res)=>(
                        <ResCard key={res.id} resData={res}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;