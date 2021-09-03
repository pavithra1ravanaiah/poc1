import React from "react";
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const Note=(props)=>{
    const edit=()=>{
        props.onEdit(props.id);
    }
    const deletion=()=>{
        props.onDelete(props.id);
    }
    return(
        <>
            <div className="col-3 card rounded shadow p-3">
                <h1 className="display-5 text-primary card-title">{props.data.title}</h1>
                <div className="card-body">
                    <p className="display-6 text-danger">{props.data.content}</p>
                    <Button className="float-start" color="primary" onClick={edit} >
                        <EditIcon/>
                    </Button>
                    <Button className="float-end" color="primary" onClick={deletion}>
                        <DeleteIcon/>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Note;