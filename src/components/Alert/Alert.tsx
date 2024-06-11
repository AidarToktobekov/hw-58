import {useState } from "react";

interface Props extends React.PropsWithChildren{
    type: string;
    onDismiss?: boolean;
}



const Alert:React.FC<Props> =({type, onDismiss, children })=>{
    const [alertState, setAlertState] = useState(true);
    type = 'alert alert-'+ type;
    return(
        <>
        <div className={type} style={{display: alertState? 'block': 'none'}} role="alert">
            {children}
            <button className="btn btn-dark m-auto mt-4" style={{display: onDismiss? 'block' : 'none'}} onClick={()=>setAlertState(false)}>Cancel</button>
        </div>
        </>
    )
}

export default Alert