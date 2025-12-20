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

import { BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Home from "./components/Home.jsx";
import ContactUs from "./components/Contactus.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Youtube from "./components/Youtube.jsx";
function App(){
  return (
    <>
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">HOME</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/youtube">YOUTUBE</Link></li>
    </ul>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<Aboutus/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
              <Route path="/youtube" element={<Youtube/>}/>
              </Routes>
              </BrowserRouter>
    </>

  )
}
export default App;