// const express= require("express");
// const app=express();
// app.get("/",(req,res)=>{
//    res.send("Hello World");
// });
// app.get("/login",(req,res)=>{
//     res.send("Login page");
// });
// app.listen(3000,() =>{
//     console.log("Server is running on http://localhost:3000")
// });

// const express = require("express");
// const cors = require("cors");


// const app = express();
// app.use(cors());
// app.use(express.json());

// var users = [
//     { id :1, name : "Alex", email: "alex@text.com"},
//     { id :2, name : "John", email: "john@text.com"}, //static dummmy database in bend
// ];

// app.get("/users", (req,res)=>{//respond
//     res.json(users);
// });

// app.post("/users", (req,res)=>{//both req and res
//     const newUser = { id: Date.now(),...req.body }; //(...=spred operator)
//     users.push(newUser);//3
//     res.json(newUser);
// });
// //localhst:5000/users/2(id)
// app.put("/users/:id", (req,res)=>{
//     const id = Number(req.params.id);
//     users = users.map((u)=>(u,id === id ? { ...u, ...req.body } : u));
//     res.json({ message: "Updated" });
// });

// app.delete("/users/:id", (req,res)=>{ //only res
//     const id = Number(req.params.id);
//     users = users.filter((u) => u.id !== id);
//     res.json({ message: "Deleted"})
// })
// app.listen(5000,()=>{
//     console.log("Server running on port 5000");
// });
// ct express = require("express");
// const cors = require("cors");
// const mongoose=require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // var users = [
// //     { id :1, name : "Alex", email: "alex@text.com"},
// //     { id :2, name : "John", email: "john@text.com"}, //static dummmy database in bend
// // ];
// mongoose
//     .connect("mongodb://localhost:27017/mern-mongo")
//     .then(()=>{
//         console.log("MongoDB connected");
//     })
//     .catch((err)=>{
//             console.error("Error connecting to mongodb:");
//     });
//     const userSchema = new mongoose.Schema({
//         name:{
//             required: true,
//             type:String,
//         },
//         email:{
//             required:true,
//             type:String,
//         },
//     }); 
// app.get("/users", (req,res)=>{//respond
//     res.json(users);
// });

// app.post("/users", (req,res)=>{//both req and res
//     const newUser = { id: Date.now(),...req.body }; //(...=spred operator)
//     users.push(newUser);//3
//     res.json(newUser);
// });
// //localhst:5000/users/2(id)
// app.put("/users/:id", (req,res)=>{
//     const id = Number(req.params.id);
//     users = users.map((u)=>(u,id === id ? { ...u, ...req.body } : u));
//     res.json({ message: "Updated" });
// });

// app.delete("/users/:id", (req,res)=>{ //only res
//     const id = Number(req.params.id);
//     users = users.filter((u) => u.id !== id);
//     res.json({ message: "Deleted"})
// })
// app.listen(5000,()=>{
//     console.log("Server running on port 5000");
// });

/*const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/login",(req,res)=>{
    res.send("Login Page");
});
//start the server:
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});*/

/*const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/login",(req,res)=>{
    res.send("Login Page");
});
//start the server:
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});*/

/*const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/login",(req,res)=>{
    res.send("Login Page");
});
//start the server:
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});*/

const express = require("express");
const cors = require("cors");//cross-orgin managing handels's request
const mongoose = require("mongoose");//it's a library:


const app = express();
app.use(cors());
app.use(express.json());//for convert json formate
//let id = 0;
/*var users = [
    { id :1, name : "Mohith", email: "mohith@tom.com"},
    { id :2, name : "Srimathi", email: "srimathi@jerry.com"},
];*/
mongoose
    .connect("mongodb://localhost:27017/learning-mern")
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.error("Error connecting to MongoDB:");
    });

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
});

const UserModel = mongoose.model("User",userSchema);
app.get("/users", async (req,res)=>{
    try {
        const users = await UserModel.find({});
    res.json(users);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.post("/users", async (req,res)=>{
    try{
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
});

/*app.put("/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    users = users.map((u)=>(u.id === id ? { ...u, ...req.body } : u));
    res.json({ message: "Updated" });
});

app.delete("/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    users = users.filter((u) => u.id !== id);
    res.json({ message: "Deleted"})
});*/

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});