import React, { Component } from 'react'
import ToDoListService from '../services/ToDoListService'

class ToDoListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Lists: [],
            font_style: '',
            toDoList: ''
        }
        this.addToDoList = this.addToDoList.bind(this);
        this.editToDoList = this.editToDoList.bind(this);
        this.deleteToDoList = this.deleteToDoList.bind(this);
        this.changeToDoHandler = this.changeToDoHandler.bind(this);

    }
    changeToDoHandler = (event) => {
        this.setState({ toDoList: event.target.value });
    }
    deleteToDoList(id) {
        ToDoListService.deleteToDoList(id).then(res => {
            this.setState({ Lists: this.state.Lists.filter(list => list.id !== id) });
        });
    }
    
    editToDoList(id) {
        this.props.history.push(`/add-list/${id}`);
    }
    addToDoList() {
        let toDoList = { toDoList: this.state.toDoList };
        ToDoListService.createsToDoLists(toDoList).then(res => {
          
        });
    }
    componentDidMount() {
        ToDoListService.getToDoLists().then((res) => {
            this.setState({ Lists: res.data });
        });
    }



    render() {
        return (
            <div style={{ minHeight: "346px" }}>
                <h2 className="text-center">TO-DO List</h2>


                <div style={{ float: 'left', marginLeft: '25%', minWidth: '50%' }} class="col-lg-4 col-lg-offset-4 text-center">
                    <form>
                        <div class="input-group">
                            <input placeholder="type here" name="todo" className="form-control col text-center"
                                value={this.state.toDo} onChange={this.changeToDoHandler} />
                            <span class="input-group-btn">
                                <button style={{  marginLeft: '10px'}}className="btn btn-primary" onClick={this.addToDoList} > Add TO-DO </button>
                            </span>
                        </div>
                    </form>
                </div>
                <br></br>
                <div style={{ float: 'left', marginLeft: '25%', minWidth: '50%' }} className="row">
                    <table className="text-center">

                        <thead>
                            <tr>
                                <th> No</th>
                                <th> List</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Lists.map(
                                    list =>
                                        <tr key={list.id}>
                                            <td> {list.id} </td>
                                            <td>{list.toDoList} </td>
                                            <td>
                                                <button onClick={() => this.editToDoList(list.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteToDoList(list.id)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                            
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ToDoListComponent
