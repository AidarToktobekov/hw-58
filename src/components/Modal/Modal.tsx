import { MouseEventHandler } from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    onClose: MouseEventHandler;
    title: string;
    buttons: {type: string, label: string, onClick: ()=>void}[];
}

const Modal:React.FC<Props> = ({show, onClose, title, children, buttons})=>{

    return (
        <>
        <div className="modal-backdrop show" style={{display: show? 'block': 'none'}}/>
        <div className="modal show" style={{display: show? 'block': 'none'}} onClick={onClose}>
            <div className="modal-dialog" onClick={(event)=>event.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header justify-content-between">
                        {title}
                        <button className="btn btn-dark" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
                    <div className="p-3">
                        {children}
                    </div>
                    <div className="d-flex gap-1 p-2">
                        {buttons.map((button)=>{
                            return(
                                <button className={'btn btn-'+button.type} onClick={button.onClick}>
                                    {button.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )
}

export default Modal