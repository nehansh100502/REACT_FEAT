import React from 'react';

const HOC = (Wrapper) => {
    let data = "hello world"
    return () => {
        return <Wrapper data={data} />
    }

}
export default HOC;


