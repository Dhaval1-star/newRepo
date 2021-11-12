import React from 'react'

export default function Alert(props) {
    return (
        <>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex justify-content-between align-content-center`} role="alert">
                <div><strong style={{textTransform: "capitalize"}}>{(props.alert.type)}</strong> : {props.alert.msg}</div> 
            </div>}
        </>
    )
}
