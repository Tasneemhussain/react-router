import { useParams } from "react-router-dom";


const AboutPage = () => {
    const Params = useParams ();


    return (
        <div>
            <h1>About Page</h1>
            <p> {Params.pageId} </p>
        </div>
    )
};

export default AboutPage;