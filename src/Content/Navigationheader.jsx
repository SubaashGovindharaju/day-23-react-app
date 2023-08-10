import Home from "./Dashboard";
import Listuser from "./Listuser";
import Createuser from "./Createuser";
import Edituser from "./Edituser";
import { BrowserRouter, Navigate, Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import styles from "./Navigation.module.css";

const Navigater = () => {
    return (

        <BrowserRouter>
           
                        
                         
                            
                  
            <nav className=" navbar-expand-lg ">

                <header className={styles.header}>

                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                                <div className={styles.home}>
                                    <Link style={{ textDecoration: 'none' }} to="/user"><button className={`btn btn-primary ${styles.button}`}><span className={styles.btnName}>Home</span></button ></Link>
                                </div>
                            </div>
                            <div className=" col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                                <div className={styles.home}>
                                    <Link style={{ textDecoration: 'none' }} to="/user/Listuser"> <button className={`btn btn-primary ${styles.button}`}><span className={styles.btnName}>List User</span></button ></Link>
                                </div>
                            </div>
                            <div className=" col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
                                <div className={styles.home}>
                                    <Link style={{ textDecoration: 'none' }} to="/user/Createuser"> <button className={`btn  btn-primary ${styles.button}`}><span className={styles.btnName}>Create User</span></button ></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </header>
            </nav>

            <Routes>
                <Route index path='/' element={<Home />} />

                <Route path="user">
                    <Route index element={<Home />} />
                    <Route path="Listuser" element={<Listuser />} />
                    <Route path="Createuser" element={<Createuser />} />
                    <Route path="Edituser" element={< Edituser />} />
                    <Route path=":userId" element={<Profile />} />
                </Route>
                <Route path='/404' element={<h3>Page not found ,please check url</h3>} />
                <Route path='*' element={<Navigate to={'/404'} replace />} />
            </Routes>

        </BrowserRouter>

    );
}
export default Navigater