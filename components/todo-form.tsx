"use client";

type Props = {
  text: string;
  onChange: () => void;
  onSubmit: () => void;
};

export default function TodoForm({ text, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={() => {}}>
      <input value={text} onChange={() => {}} placeholder="Add a task…" />
      <button type="submit">Add</button>
    </form>
  );
}
