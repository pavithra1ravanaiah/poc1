import React from "react";
import ReactDOM from "react-dom";
import { Switch,Route } from "react-router";
/* import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";*/
import Error from "./Error";

/* const App=()=>
{
  return(
    <>
      <h1 className="display-6 text-danger">Router Sample From App</h1>
      <Switch>
        <Route path="/" exact component={()=><Compo1/>}/>
        <Route path="/two" component={()=><Compo2/>}/>
        <Route path="/three" component={()=><Compo3/>}/>
        <Route component={()=><Error/>}/>
      </Switch>
    </>
  );
}

*/
import { useState } from "react";
import Bottom from "./Bottom"
import NewNotes from "./NewNotes";
import UpdateNotes from "./UpdateNotes";
import Note from "./Note";
import Top from "./Top";
import Button from '@material-ui/core/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import BinNote from "./BinNote";
 const App=()=>{
  const[notes,setNotes]=useState([
    {
      title:"Internship",
      content:"Javascript back end"
    },
    {
      title:"First Application",
      content:"SprinBoot Thymeleaf"
    },
    {
      title:"First Job",
      content:"CUDA product based sector"
    }
  ]);
  const[bins,setBins]=useState([]);
  const[pos,setPos]=useState();
  const[isEdit,setIsEdit]=useState(false);
  const[isRecycle,setRecycle]=useState(false);
  const update=(id)=>{
    setPos(id);
    setIsEdit(true);
  }
  const insert=(bundle)=>{
    setNotes((old)=>{
      return [...old,bundle]
    });
    alert("Notes are added into your account "+notes.length);
  }
  const change=(pack)=>{
    const index=pack[1];
    const obj=pack[0];
    notes[index].title=obj.title;// update
    notes[index].content=obj.content;// Update
    alert("Update done");
    setIsEdit(false);
  }
  const remove=(id)=>{
    setBins((old)=>{
      return [...old,notes[id]]
    });
    alert("Notes are moved to your bin ");
    setNotes((old)=>{
      return old.filter((elem,ind)=>{
        return ind!==id
      })
    })
    alert("Deletion done");
  }
  const recall=(id)=>{
    const bundle=bins[id];
    setBins((old)=>{
      return old.filter((elem,ind)=>{
        return ind!==id
      })
    })
    setNotes((old)=>{
      return [...old,bundle]
    });
    alert("Notes are added into your account "+notes.length);
    setRecycle(false);
  }
  return(
    <>
      <Top/>
      <Button onClick={()=>{setRecycle(true)}}>
        <DeleteSweepIcon/>
      </Button>
      {isEdit?<UpdateNotes onUpdate={change} obj={notes[pos]} id={pos}/>:<NewNotes onAdd={insert}/>}
      <div className="row">
      <h1>{notes.length}</h1>
        { 
          notes.map((object,position)=>{
          return (<Note key={position} id={position} data={object} onEdit={update} onDelete={remove}/>)
        })}
      </div>
      {(isRecycle?
        <div className="row justify-content-center">
        <h1 className="display-6">Recycle Bin Notes</h1>
        {
          bins.map((obj,ind)=>{
            return (<BinNote key={ind} id={ind} data={obj} onRestore={recall}/>);
          })
        }
      </div>
      :null)}
      <Bottom/>
    </>
  );
}

export default App;