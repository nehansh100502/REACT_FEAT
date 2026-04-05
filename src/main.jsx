// const root = document.getElementById("root");
// const tag = document.createElement("h1");
// tag.textContent = "hello world";
// root.appendChild(tag);
// console.log("hello world");
// XML = extensible markup language
import { createRoot } from "react-dom/client";
// import React from "react";
import App from "./App";
import './index.css'
import HeaderComp from "./components /HeaderComp";
// import themeChange from "./AllTopics/States/ThemeChange";
import "./style.css";
import CodeSplit from '../src/AllTopics/CodeSplitting/codeSpilt.jsx'

createRoot(document.getElementById("root")).render(

    <>
        {/* <HeaderComp /> */}
        {/* <CodeSplit /> */}
        <App />
        {/* <themeChange /> */}


    </>

);

// createRoot(document.getElementById("root")).render(
//     <>
//         <h1>hello world</h1>
//         <h2>his idpip</h2>
//         <h3>dhiedfoj sijdijdi</h3>
//     </>

// );

// empty tag  or fragment tag :  <></>  is called fragment tag
// used to wrap multiple tags without adding extra node in the dom
// if we use div tag to wrap multiple tags then it will add extra node in the dom which is not good for performance and also it will create problem in styling
// if we use fragment tag then it will not add extra node in the dom and it will not create problem in styling
// if we want to add key attribute to the fragment tag then we can use React.Fragment instead of empty tag
// import React from "react";
// createRoot(document.getElementById("root")).render(
//     <React.Fragment>
//         <h1>hello world</h1>
//         <h2>his idpip</h2>
//         <h3>dhiedfoj sijdijdi</h3>
//     </React.Fragment>
// );


