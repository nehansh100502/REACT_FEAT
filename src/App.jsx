import React from "react";
import { useState } from 'react';
// import FunctionBased from "./AllTopics/Typeofcomponents/functionBased";
// import ClassBased from "./AllTopics/Typeofcomponents/ClassBased"
// import StatesInFBC from "./AllTopics/States/StatesInFBC";
// import ThemeChange from "./AllTopics/States/ThemeChange";
// import Counter from "./AllTopics/States/counter"
// import Task01 from "./AllTopi/cs/States/Statetask01";
// import StatesInCBC from "./AllTopics/States/StatesinCBC";
// import PropParent from "./AllTopics/Props/PropsParent";
// import ChildParent from "./AllTopics/Props/ChildParent";
// import ControlledForms1 from "./AllTopics/Forms/ControlledForms1";
// import ControlledForms2 from "./AllTopics/Forms/ControlledForms2";
import TodoWrapper from "./TODO-APP/TodoWrapper";
import TodoContextProvider from "./TODO-APP/ContextProvider";
import ReactCss from "./AllTopics/react_css/react.jsx"
// import Navbar from "./AllTopics/react_css/Navbar.jsx"
import LifeCycle from './AllTopics/lifeCycle/LifeCycleInCbc.jsx'
// import TodoList from "./TODO-APP/AllTodo";
// import LifeCycleInFbc from './AllTopics/lifeCycle/LifeCycleInFbc.jsx'
import Todoss from './AllTopics/Fetch/Todos.jsx'
// import User from './AllTopics/customHooks/users.jsx'
// import Memo from './AllTopics/Memo_callBack/memoExa.jsx'
// import Dashboard from "./AllTopics/Routing/Dashboard.jsx"
import Hoc from './AllTopics/HOC/ParentHoc.jsx'
// import CreateTodo from "./TODO-APP/CreateTodo";
// import ContextProvider from "./TODO-APP/ContextProvider";
import Dashboard from './AllTopics/Routing/Dashboard.jsx'
import Routing from './Routing.jsx'
// import ReduxCounter from './AllTopics/Redux/reduxCounter.jsx'
import Virtualization from './AllTopics/Virtualization/virtualisedList.jsx'
import CrudApp from './CRUD-app/CrudApp.jsx'
const App = () => {
    // const [toggle, setToggle] = useState(false)
    // const handleToggle = () => setToggle((prev) => !prev)



    // let greet = "Hello World";
    return (
        <>
            {/* <h1>REACT JS BASICS</h1> */}
            {/* <Counter /> */}
            {/* <ThemeChange />
            <h2>{greet}</h2>
            <FunctionBased />
            <ClassBased />
            <StatesInFBC /> */}
            {/* <ThemeChange /> */}
            {/* <Task01 /> */}
            {/* <StatesInCBC /> */}
            {/* <PropParent />  */}
            {/* <ControlledForms1 /> */}
            {/* <ControlledForms2 /> */}
            {/* <TodoContextProvider>
                <TodoWrapper />

            </TodoContextProvider> */}
            {/* <ReactCss /> */}

            {/* <Navbar /> */}
            {/* <button onClick={handleToggle}>Toggle me </button>
            {toggle && <LifeCycle />
            } */}

            {/* <LifeCycleInFbc /> */}
            {/* <Todoss /> */}
            {/* <User /> */}
            {/* <Memo /> */}
            {/* <Dashboard /> */}
            {/* <Hoc /> */}
            {/* <Dashboard /> */}
            {/* <Routing /> */}
            {/* // <ReduxCounter /> */}
            {/* <Virtualization /> */}
            <CrudApp />
        </>
    )
}
export default App;

// usestate = array return 
// useref = return object 
// useEffect = return cleanUp Function