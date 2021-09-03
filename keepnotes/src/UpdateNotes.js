import { useState } from "react";
import React from "react";
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';

const UpdateNotes=(prop)=>{

    const[show,setShow]=useState(false);

    const[bundle,setBundle]=useState({
        title:prop.obj.title,
        content:prop.obj.content
    })

    const save=()=>{
        //alert(bundle.content+" "+bundle.title+" about to save");
        prop.onUpdate([bundle,prop.id]);
        setBundle(()=>{
            return{
                title:"",
                content:""
            }
        });
    }

    const textEve=(eve)=>{
        //alert('text eve invoked');
        const {name,value}=eve.target;
        setBundle((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }
    return(
        <>
            <div className="container-fluid">
                <h1 className="text-center text-primary">Update Exists DLithe Keep Note</h1>
                <div className="mt-3 row justify-content-center">
                    <div className="card rounded shadow-lg col-4">
                        <div className="card-body" onDoubleClick={()=>{setShow(false)}}>
                            <form>
                                {show?
                                <TextField 
                                id="outlined-basic" 
                                label="Title" 
                                className="w-100"
                                variant="outlined" 
                                placeholder="Title" 
                                name="title" 
                                onChange={textEve}
                                value={bundle.title}
                                />
                                :null}
                                <textarea name="content" 
                                placeholder="Write note" 
                                className="form-control"
                                value={bundle.content}
                                onChange={textEve}
                                onClick={()=>{setShow(true)}}
                                />
                                {show?
                                <div className="row justify-content-center">
                                    <Button 
                                    onClick={save}
                                    >
                                    <UpdateIcon/>
                                    </Button>
                                </div>
                                :null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateNotes;