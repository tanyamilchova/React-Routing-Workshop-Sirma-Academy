export const todosKeys={
    // all: (page=0) => ['todos',{page}], // кешира определена страница
    all: () => ['todos'], 
    one: (todoId)=> ['todos', todoId]
}