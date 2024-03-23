import { useLoaderData } from "react-router-dom";
import './UserDetails.css'


const UserDetails = () => {
    const user = useLoaderData();
    const { name, website, email, phone } = user;
    return (
        <div>
            <h2>Details about user: <br /> <span className="userdetails-name">{name}</span>  </h2>
            <p>Website: {website} </p>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
        </div>
    );
};

export default UserDetails;