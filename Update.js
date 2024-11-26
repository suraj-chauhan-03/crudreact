import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom'

const Update = () => {

    const {id} =useParams();
     const [name, setname] = useState("");
    const [price, setprice] = useState(0);
    const [about, setabout] = useState("");
    const [rating, setrating] = useState(0);
    const [cod, setcod] = useState("");
    const [clothtypes, setclothtype] = useState([]);
    const clothtype = clothtypes.join(', ');

    const handleupdete= async()=>{
        try{

            await axios.put("http://localhost:2000/updatedata/"+id,{name,price,about,rating,cod,clothtype})
        }catch(e)
        {
            console.log("error in update " + e);
        }
    }
  return (
    <div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div><br />
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">About</label>
        <input type="text" class="form-control" value={about} onChange={(e)=>{setabout(e.target.value)}} id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div><br />
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Price</label>
        <input type="number" class="form-control" value={price} onChange={(e)=>{setprice(e.target.value)}} id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div><br />
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">COD</label>
        <input type="radio" name='rd' value="YES" onClick={(e)=>{setcod(e.target.value)}} />YES
        <input type="radio" name='rd' value="NO" onClick={(e)=>{setcod(e.target.value)} }/>No
    </div><br />
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">CLOTH TYPE</label>
        <input type="checkbox" name='chk' value="Cotton" onClick={(e)=>{setclothtype([...clothtypes,e.target.value])}}/>Cotton
        <input type="checkbox" name='chk' value="Faibric" onClick={(e)=>{setclothtype([...clothtypes,e.target.value])}}/>Faibric
        <input type="checkbox" name='chk' value="Lalon" onClick={(e)=>{setclothtype([...clothtypes,e.target.value])}}/>Lalon
    </div><br />
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">CLOTH TYPE</label>
        <select name="rate" id="" onClick={(e)=>{setrating(e.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
    </div><br />

    <div>
                <button onClick={()=>handleupdete()}>Submit</button>
                <button><Link to="/display">Display</Link></button>
            </div>

   
</div>
  )
}

export default Update
