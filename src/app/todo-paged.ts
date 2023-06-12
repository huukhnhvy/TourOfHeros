import { Todo } from "./todo";

export interface TodoPaged {
    totalItems: number;
    data: Todo[];
}
