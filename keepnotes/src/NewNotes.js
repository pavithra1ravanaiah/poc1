import { useState } from "react";
import React from "react";
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NewNotes=(prop)=>{

    const[show,setShow]=useState(false);

    const[bundle,setBundle]=useState({
        title:"",
        content:""
    })

    const save=()=>{
        //alert(bundle.content+" "+bundle.title+" about to save");
        prop.onAdd(bundle);
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
                <h1 className="text-center text-primary">New DLithe Keep Note</h1>
                <div className="mt-3 row justify-content-center">
                    <div className="card rounded shadow-lg col-4">
                        <div className="card-body" onDoubleClick={()=>{setShow(false)}}>
                            <form>
                                {show?
                                <input type="text" 
                                placeholder="Title" 
                                name="title" 
                                className="form-control"
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
                                    <input type="button" 
                                    className="col-4 btn btn-outline-success badge-pill" 
                                    value="Create Note"
                                    onClick={save}
                                    />
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
export default NewNotes;