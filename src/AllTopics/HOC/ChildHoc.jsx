import React from 'react';
import Hoc from './Hoc.jsx'

const ChildHoc = (props) => {
    console.log(props)
    return (
        <>
            <h2 style={{ margin: "100px" }}>Child component</h2>
        </>
    )
}
export default Hoc(ChildHoc);
