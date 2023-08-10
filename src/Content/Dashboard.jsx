// import React from "react";
import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css'
import { getUser } from '../../Usercrud';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await getUser();
        setUsers(response);
    }

    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <div>
            <p style={{ padding: 10 }}>
                *Note:<br />
                1.Point over the image to view the details<br />
                2.Click the image to view the Profile
            </p>
            <div className={` container ${styles.container}`}>
                <div className='row'>

                    {users.map((user) => (
                        <div key={user.id} className={`col ${styles.col}`}>
                            <div className={styles.box}>
                                <div className={styles.card}>
                                    <div className={`${styles.face} ${styles.face1}`}>

                                        <Link to={`/user/${user.id}`}>
                                            <img src={user.image} alt={user.Name} />
                                        </Link>
                                    </div>
                                    <div className={`${styles.face} ${styles.face2}`}>
                                        <div className={styles.content}>
                                            <h4>{user.Name}</h4>
                                            <h6>Age: {user.Age}</h6>
                                            <h6>Gender: {user.Gender}</h6>
                                            <h6>Real Name: {user.RealName}</h6>
                                            <h6>Super Hero Name: {user.SuperHeroName}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>

            </div >

        </div>


    );
}

export default Home;

