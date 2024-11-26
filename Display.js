import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Display = () => {

    const {navigate} = useNavigate();
    const [name,setname] = useState("");
    const [alldata, setalldata] = useState([]);

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        try {
            const data = await axios.get("http://localhost:2000/")
            setalldata(data.data)
            console.log(data);
            
        } catch (error) {
            console.log("error in display : " + error)
        }
    }

    const handledelte=async(id)=>{
        try {
            await axios.delete("http://localhost:2000/deletecard/"+id)
            // getdata();
            navigate("/display")
        } catch (error) {
            console.log("error in deleting " + error)
        }
    }

    const handlesort=async()=>{
        try {
            const sortdata = await axios.get("http://localhost:2000/sortname")
            setalldata(sortdata.data)
        } catch (error) {
            console.log("sort error "+error)
        }
    }

    const handlesearch = async()=>{
        try {
            const searchdata = await axios.get("http://localhost:2000/searchcard/"+name);
            setalldata(searchdata.data);
            
        } catch (error) {
            console.log("error in search "+error);
        }
    }

    return (
        <div>
            <input type="text" class="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} id="exampleFormControlInput1" placeholder="name@example.com"/>
            <button onClick={handlesearch}>Search</button>
            <div>
                <button onClick={(e)=>handlesort()}>Sort</button>&nbsp;
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">about</th>
                        <th scope="col">price</th>
                        <th scope="col">rating</th>
                        <th scope="col">cod</th>
                        <th scope="col">clothtype</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alldata.map((item)=>{
                            return(<tr>
                                <th scope="row">{item.name}</th>
                                <td>{item.about}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                                <td>{item.clothtype}</td>
                                <td>{item.cod}</td>
                                <td>
                                <button onClick={(e)=>handledelte(item._id)}>Delete</button>&nbsp;
                                <button><Link to={`/update/${item._id}`}>Update</Link></button>
                                </td>
                            </tr>
                            );
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Display
