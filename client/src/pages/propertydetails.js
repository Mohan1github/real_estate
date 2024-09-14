import React from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
const Propertybydetails = () =>{
    const {id} = useParams();
    const[prodata,setPropdata] = useState({})
    const details = async()=>{
        try{
        const res = await axios.get(`http://localhost:5001/api/v1/property/getproperty/${id}`)
        if(res){
            setPropdata(res.data.data)
            console.log(res)
        }
        else{
            console.log("Data not found")
        }}
        catch(err){
                console.log(err);
        }
}
useEffect(()=>{
    details();
},[])
    return(
    <>
    <p>property</p>
    <p>{prodata.name}</p>
    <p>{prodata.regularPrice}</p>
    <img src={prodata.imageurls} alt="rbvmmmgk"></img>
    </>)
}
export default Propertybydetails;
