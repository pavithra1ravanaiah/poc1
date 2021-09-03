import React from "react";
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import RestoreIcon from '@material-ui/icons/Restore';


const BinNote=(props)=>{
    const restore=()=>{
        props.onRestore(props.id);
    }
    return(
        <>
            <div className="col-3 card rounded shadow p-3">
                <h1 className="display-5 text-primary card-title">{props.data.title}</h1>
                <div className="card-body">
                    <p className="display-6 text-danger">{props.data.content}</p>
                    <Button className="float-end" color="success" onClick={restore}>
                        <RestoreIcon/>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default BinNote;