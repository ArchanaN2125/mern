// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React, { useEffect, useState } from "react";

// function App(){
//   const [users, setUsers] = useState([]);//state manage user[1,2]
//   const[name,SetName]=useState("")
//   const[email,setEmail] = useState("")

//   useEffect(()=>{
//     fetch("http://localhost:5000/users")
//     .then((res)=> res.json())//res in json format
//     .then((data)=> setUsers(data));
//   },[]);
//   const addUser=()=>{
//     fetch("http://localhost:5000/users")
    
//   }

//   return(
//     <div>
//       <h1>User List</h1>
//       <input placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)}
//       />
//       <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}
//       />
//       <button onClick={addUser}>Add</button>
//       <ul>
//         {users.map((u)=>(
//           <li key={u.id}>
//             {u.name} - {u.email} 
//           </li> // iterate and print
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import { useEffect, useState } from "react";
// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   const addUser = () => {
//     fetch("http://localhost:5000/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email }),
//     })
//       .then((res) => res.json())
//       .then((newUser) => {
//         setUsers([...users, newUser]);
//         setName("");
//         setEmail("");
//       });
//   };
//   const deleteUser = (id) => {
//     fetch(`http://localhost:5000/users/${id}`, {
//       method: "DELETE",
//     }).then(() => {
//       setUsers(users.filter((u) => u.id !== id));
//     });
//   };
//   return (
//     <div>
//       <h1>User List</h1>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={addUser}>Add</button>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>
//             {u.name} - {u.email}
//             <button onClick={() => deleteUser(u.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
// import React, { useEffect, useState } from "react";

// function App(){
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const[editingId,setEditingId]=useState(null);

//   useEffect(()=>{
//     fetch("http://localhost:5000/users")
//     .then((res)=> res.json())
//     .then((data)=> setUsers(data));
//   },[]);

//   const addUser = () =>{
//     if ( !name || !email) return;
//     fetch("http://localhost:5000/users",{
//       method: "POST",
//       headers: { "Content-Type":"application/json"},
//       body: JSON.stringify({name, email}),
//     })
//     .then((res)=> res.json())
//     .then((newUser)=>{
//       setUsers([...users, newUser]);
//       setName("");
//       setEmail("");
//     });
//   };

//   return(
//     <div>
//       <h1>User List</h1>
//       <input
//           placeholder="Name"
//           value={name}
//           onChange={(e)=> setName(e.target.value)}
//           />
//           <input
//              placeholder="Email"
//              value={email}
//              onChange={(e)=> setEmail(e.target.value)}
//              />
//             <button onClick={addUser}>Add</button>
//       <ul>
//         {users.map((u)=>(
//           <li key={u._id}>
//             {u.name} - {u.email}
//             <button type="button" onClick={()=>addUser(u)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null); 
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const addUser = () => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
      });
  };
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((u) => u.id !== id));
    });
  };
  const editUser()
  return (
    <div>
      <h1>User List</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
           <button type ="button" onClick={()=>editUser(u)}>{editingId==u._id? "Save":"Edit"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;