import React from "react";
import ChildHoc from "./ChildHoc.jsx";
const ParentHoc = () => {
    return (
        <>
            <div>
                <h2 style={{ margin: "100px" }}>Learn Higher order functions </h2>
                <hr></hr>
                <ChildHoc />
            </div >
        </>
    )

}
export default ParentHoc

// //! hoc :
// //? data handling 
// //? encapsulation 
// //? props drilling avoid