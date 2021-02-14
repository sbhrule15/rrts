import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

// define return shape from API
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// additional type safety
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
