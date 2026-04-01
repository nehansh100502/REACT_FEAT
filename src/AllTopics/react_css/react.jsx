import react from "react";
const ReactCSS = () => {
    return (
        <>
            <h1 style={{ backgroundColor: "red", color: "black" }}>hello

            </h1>
            <section className="container">
                <h3>Style me using global Css</h3>
                <p>
                    Inline / global/ module
                </p>
            </section>
        </>
    )
}
export default ReactCSS;