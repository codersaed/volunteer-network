import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';


const Registation = () => {
    const handleReg = () => {
        const newReg = { ...loggedInUser }
        fetch('https://volunteer-network-server23.herokuapp.com/addReg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReg)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="text-center pb-5 pt-3">
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
            <div className=" w-50 container p-4" style={{ border: '1px solid gray', }}>
                <form>
                    <div className="form-group">
                        <label for="exampleInputName1">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" value={loggedInUser.name} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">UserName Email</label>
                        <input type="email" className="form-control" for="exampleInputEmail1" value={loggedInUser.email} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputData">Data</label>
                        <input type="Data" className="form-control" id="exampleInputData" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputD">Desicription</label>
                        <input type="Data" className="form-control" id="exampleInputD" />
                    </div>
                    <Link to="/event" onClick={handleReg} className="btn btn-primary" style={{ padding: '10px 273px' }}>Registration</Link>
                </form>
            </div>
        </>
    );
};

export default Registation;