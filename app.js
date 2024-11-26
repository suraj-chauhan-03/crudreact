const express = require("express")
const app = express();
const PORT = 2000;
const connect = require("./db/connection")
const shoptbl = require("./db/schema");
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`server is running on port http://localhost:${PORT}`);

    } catch (error) {
        console.log("error :" + error);
    }
})

app.post("/addcard", async (req, res) => {
    try {
        const { name, price, about, rating, cod, clothtype } = req.body;
        const insertcard = await shoptbl.create({ name, price, about, rating, cod, clothtype })
        console.log("inserted")
       
    } catch (error) {
        console.log("error in insert :" + error);
    }


})


app.get("/", async (req, res) => {
    try {

        const alldata = await shoptbl.find();
        res.json(alldata);
        console.log(alldata);
    } catch (error) {
        console.log("error in display :" + error);
    }

})

app.get("/sortname", async (req, res) => {
    try {

        const alldata = await shoptbl.find().sort({name:1});
        res.json(alldata);
        console.log(alldata);
    } catch (error) {
        console.log("error in display :" + error);
    }

})

app.delete("/deletecard/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const deletedata = await shoptbl.findByIdAndDelete(id);
        console.log("deleted");
    } catch (error) {
        console.log("error in deleting :" + error);
    }
})


app.put("/updatedata/:_id", async (req, res) => {
    try {
        const id = req.params._id;
        const upadtedata = await shoptbl.findByIdAndUpdate(id, req.body, { new: true })

        if (upadtedata) {
            console.log("updated");

        }
        else {
            console.log("not updated");
        }

    } catch (error) {
        console.log("eror in update" + error);
    }
})

app.get("/searchcard/:key", async (req, res) => {
    try {
        const { key } = req.params;
        const userData = await shoptbl.find({ 
            $or :[
                {name: { $regex: key, $options: 'i' } },
                {clothtype: { $regex: key, $options: 'i' } },
                {price: { $regex: key, $options: 'i' } },

                
            ]
           
        });
        res.json(userData);
        console.log(userData);

    } catch (error) {
        console.log("error in displaying" + error);

    }
})

app.get("/sort/:key",async(req,res)=>{

    try {
        const {filed = 'name',order = 'asc'} = req.params;
        const sortorder=order === 'asc'?1:-1;
        
        const sorteddata = await shoptbl.find().sort({
            [filed]:sortorder
        });
        res.status(200).json(sortorder);
        console.log(sortorder.data);
        
    } catch (error) {
        console.log("error in sorting" + error);
    }
})