import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile (){

    const {myData} = useContext(UserContext)

    return(
    <div>
        <h2>{myData.name}</h2>
        <p>Age: {myData.age}</p>
        <p>Bio: {myData.bio}</p>
    </div> 
    );
}
export default UserProfile;