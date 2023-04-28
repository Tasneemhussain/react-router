import { useEffect } from "react";


const Greet = ({firstName}) => {
    const message = `Hello, ${firstName}`; //calculate output
        //bad example
    // document.title = `Greeting to ${firstName}`;

    useEffect(() => {
        //side-effect logic
        document.title = `Greeting to ${firstName}`; //side-effect
    }, [firstName])

    return(
        <div>
            useEffect Hook
            <p> {message} </p>
            {/* calculate output */}
        </div>
    );


};
export default Greet;