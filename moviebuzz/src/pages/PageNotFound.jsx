import {Link} from "react-router-dom";
import notfound from "../assets/notfound.jpeg";
export const PageNotFound = () => {
  return (

   <div className="container">
    <img src={notfound} className="img-fluid" />
    <p className="text-center">
        <Link to="/" className="btn btn-danger">
            Go tO Home Page
        </Link>
    </p>
   </div>
  );
};