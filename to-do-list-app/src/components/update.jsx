import React, { Component } from 'react'
import ToDoListService from '../services/ToDoListService';


class update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            toDoList: ''
        }
        this.changeToDoHandler = this.changeToDoHandler.bind(this);
        this.saveToAssign = this.saveToAssign.bind(this);
    }
    
    saveToAssign = (e) => {
        e.preventDefault();
        let Data = { toDoList: this.state.toDoList};
        console.log('Data => ' + JSON.stringify(Data));

        ToDoListService.updateToDoList(Data, this.state.id).then(res => {
                this.props.history.push('/');
            });
        
    }
   
    changeToDoHandler = (event) => {
        this.setState({ toDoList: event.target.value });
    }
    cancel() {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div >

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update </h3>
                            <div className="card-body">
                                <form>
                                
                                    <div className="form-group">
                                        <label> ToDo: </label>
                                        <input placeholder="type here" name="todo" className="form-control"
                                            value={this.state.toDoList} onChange={this.changeToDoHandler} />
                                    </div>
                                    
                                    <div style={{ minHeight: "10px" }}>

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveToAssign}>update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default update
