import axios from 'axios';

const LIST_API_BASE_URL = "http://localhost:9090/api/to-do-list";

class ToDoListService {

    getToDoLists() {
        return axios.get(LIST_API_BASE_URL + '/lists');
    }

    getToDoList(id) {
        return axios.get(LIST_API_BASE_URL + '/list/' + id);
    }

    createsToDoLists(toDoList) {
        return axios.post(LIST_API_BASE_URL + '/save', toDoList);
    }

    updateToDoList(toDoList, id) {
        return axios.put(LIST_API_BASE_URL + '/update/' + id, toDoList);
    }

    deleteToDoList(id) {
        return axios.delete(LIST_API_BASE_URL + '/delete/' + id);
    }


}

export default new ToDoListService()