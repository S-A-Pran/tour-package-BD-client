import React from 'react';
import { Spinner } from 'react-bootstrap';
import usePlans from '../../../Hook/usePlans';
import Plan from '../Plan/Plan';

const Plans = () => {
    const plans = usePlans();

    if(!plans){
        return <Spinner animation="grow" variant="danger" />
    }


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                plans.map(plan => <Plan key={plan.place} plan={plan}></Plan>)
            }
        </div>
    );
};

export default Plans;