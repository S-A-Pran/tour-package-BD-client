import { faMoneyBillAlt, faStopwatch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Plan = ({plan}) => {
    const time = <FontAwesomeIcon icon={faStopwatch}/>
    const user = <FontAwesomeIcon icon={faUserCircle}/>
    const money = <FontAwesomeIcon icon={faMoneyBillAlt}/>
    
    const {place, img, duration, person, budget, detail} = plan;
    return (
        <div className='col'>
            <div className="card h-100">
            <img height='200px' src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">{place}</h5>
                    <p className="card-text">{detail}</p>
                    <h6>{time} {duration}</h6>
                    <h6>{user} {person}</h6>
                    <h5>{money} {budget}</h5>

                </div>
                <div className='text-center pb-2'>
                    <Link to={`/placeorder/${plan._id}`}><button className='btn btn-warning'>Place Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Plan;