import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
export default App;

/*
1.todotemplate : 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여줍니다
children으로 내부 jsx를 props로 받아 와서 렌더링해 줍니다.
2.todoinsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다.
state를 통해 인풋의 상태를 관리합니다.
3.todolistitem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. 
todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 ui를 보여줍니다.
4.todolist : todos 배열을 props로 받아 온 후 , 이를 배열 내장 함수 map을 사용해서 여러개의 todolistitem컴포넌트로 변환하여 보여줍니다.
*/
