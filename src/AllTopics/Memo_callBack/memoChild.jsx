import React from 'react';

const memoChild = (props) => {
    console.log("I am memo child component")
    return (
        <>
            <h1>Memo Child Component</h1>
        </>
    )
}
export default React.memo(memoChild);
// React.memo() OR memo() = is used to memoized a component until its props are changed 