"use client";

import { Todo } from "@/types/todo";
import { usePersistentState } from "@/hooks/usePersistentState";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import SearchBox from "@/components/search-box";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos, hasHydrated] = usePersistentState<Todo[]>(
    "todos",
    []
  );
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  if (!hasHydrated) return null;

  return (
    <main>
      <h1>TODO List</h1>
      <TodoForm text={text} onChange={() => {}} onSubmit={() => {}} />
      <SearchBox value={search} onChange={() => {}} />
      <TodoList
        todos={todos}
        onToggle={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    </main>
  );
}
