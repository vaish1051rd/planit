import React, { Component } from 'react'
import styles from './Planit.css'; 

 class Planit extends Component {

    constructor(){
        super();
        this.state={
            tasks:[{task:'checkmails' , id:1},{task:'read article',id:2}],
            currTask:''
        }
    }
    handlechange=(e)=>{
        console.log(e.target.value)
       this.setState({
        currTask:e.target.value
       } )
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handleDelete =(id) =>{
     let narr =this.state.tasks.filter((taskObj)=>{
        return taskObj.id!=id
     })
     this.setState({
        tasks:[...narr]
     })
    }
  render() {

   
    console.log('render')
    return (
      <div className={'planit-container'}>
        <h4 className='header'>Be More Productive :)</h4>
        <input type="text" value={this.state.currTask} onChange={this.handlechange} className={'task-item'}/>
        <button onClick={this.handleSubmit}  className={'add-task-button'} >Submit</button>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
            <li key={taskObj.id} className={'task-item'}>
                <p className={'task-header'}>{taskObj.task}</p>
                <button onClick={() => this.handleDelete(taskObj.id)} className={'completed-task'}>Delete</button>
            </li>
             ) )
        }
        </ul>
         {/* Footer */}
         <div className={'footer'}>
          <p> Copyright © 2022 Vaishnavi.All right reserved.

          </p>
        </div>
      </div>
    )
  }
}
export default Planit;