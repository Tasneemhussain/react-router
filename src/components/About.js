import {Link} from "react-router-dom";



const About = () =>{
    return (
        <div>
            <h1>About Page</h1>
            <div  style={{margintop:"10px"}} className="link__list">
                <ul>
                    <li>
                      <Link className="abouts" to="/about/p1">
                        page 1
                      </Link> 
                    </li>
                    <li>
                      <Link className="abouts" to="/about/p2">
                        page 2
                      </Link> 
                    </li>
                    <li>
                      <Link className="abouts" to="/about/p3">
                        page 3
                      </Link> 
                    </li>
                    
                </ul>
            </div>
        </div>
        
    );
};

export default About;