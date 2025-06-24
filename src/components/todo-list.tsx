"use client";

import { useState } from "react";
import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export default function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => {}} />

          {editingId === todo.id ? (
            <input
              autoFocus
              value={editingText}
              onChange={() => {}}
              onBlur={() => {}}
              onKeyDown={() => {}}
            />
          ) : (
            <span onClick={() => {}}>{todo.text}</span>
          )}

          <button onClick={() => {}}>✕</button>
        </li>
      ))}
    </ul>
  );
}
