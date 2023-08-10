import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getProfile } from "../../Usercrud";
import styles from './Profile.module.css';

const Profile = () => {




    const { userId } = useParams();
    const [profileData, setData] = useState({
        Name: "",
        Gender: "",
        Age: "",
        image: ""
    });
    const loadUsers = async () => {
        const response = await getProfile(userId);
        setData(response);
    }

    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const removeFromUi = async (userId) => {
        // eslint-disable-next-line no-unused-vars
        const response = await deleteUser(userId);
        const newUser = profileData.filter(({ id }) => userId !== id);
        setData(newUser);
    }
    return (
        <div>
            <div className={styles.profile}>
                <img src={profileData.image} alt="" />
                <h1>{profileData.Name}</h1>
                <h2>AGE: {profileData.Age}</h2>
                <h2>Gender:{profileData.Gender}</h2>
                <h2>Real Name: {profileData.RealName}</h2>
                <h2>Super Hero Name: {profileData.SuperHeroName}</h2>
            </div>
            <div className={styles.button}>
                <Link style={{ textDecoration: 'none' }} to={`/user/Edituser?id=${profileData.id}`}>
                    
                    <button  className={` btn btn-primary ${styles.button}`}>EDIT</button>
                   
                    </Link>
                <Link style={{ textDecoration: 'none' }} to={`/user`}> <button  className={` btn btn-primary ${styles.button}`} onClick={() => removeFromUi(profileData.id)} >Delete</button></Link>
            </div>
        </div >

    );
}

export default Profile;