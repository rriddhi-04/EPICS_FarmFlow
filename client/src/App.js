// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";  
// import {Login } from "./components/login/Login";
// import Register from "./components/register/Register";
// import Techniques from "./components/techniques/Techniques";
// import UserInfo from "./components/user/UserInfo";
// import BlogPage from "./components/blogs/blog";
// // import FetchData from "./components/Fetchdata";
// // import SendData from "./components/SendData";
// // import UpdateData from "./components/Update";

// function App() {
//   return (
//     <>


//     <div>
//       {/* <h1>Farm-Flow Integration</h1> */}
//       {/* <FetchData />
//       <SendData />
//       <UpdateData /> */}
//     </div>
//     <Router>
//       <Navbar />
//       <main style={{ paddingTop: "80px" }}>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/techniques" element={<Techniques />} style={{padding: "84px"}} />
//             <Route path="/userinfo" element={<UserInfo />} />
//             <Route path="/blog" element={<BlogPage />} />
//             {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />   */}
//           <Route path="/" element={<Home/>} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//     </>
//   );
// }


// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";  
import { Login } from "./components/login/Login";
import Register from "./components/register/Register";
import Techniques from "./components/techniques/Techniques";
import UserInfo from "./components/user/UserInfo";
import BlogPage from "./components/blogs/blog";

function App() {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <Footer />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  // const applyPadding = location.pathname !== "/"; // Apply padding to all pages except Home
  const whiteTextPages = ["/"];  
  const textColor = whiteTextPages.includes(location.pathname) ? "white" : "black";


  return (
    <main style={{ 
      paddingTop: location.pathname !== "/" ? "80px" : "0px",  // Apply padding except on Home
      color: textColor  // Apply font color based on route
    }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;



