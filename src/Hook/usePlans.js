import { useEffect, useState } from "react"

const usePlans = () =>{
    const [plans, setPlans] = useState([]);
    useEffect(()=>{
        fetch('https://bloodcurdling-werewolf-39877.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPlans(data))
    }, [])

    return plans;
}

export default usePlans;