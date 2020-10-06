import React from 'react';
import { useHistory } from 'react-router-dom';

const VolunteerInfo = ({ card }) => {
    const history = useHistory()
    const handleReg = (id) => {
        history.push(`/reg/${id}`);
    }
    return (
        <>
            <div className="col-md-3 mb-3" onClick={() => handleReg(card.id)}>
                <div className="card" style={{ cursor: 'pointer' }}>
                    <img style={{ width: '100%' }} src={require(`../../images/${card.img}`)} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VolunteerInfo;