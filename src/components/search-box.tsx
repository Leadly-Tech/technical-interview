"use client";

type Props = {
  value: string;
  onChange: () => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return <input value={value} onChange={() => {}} placeholder="Search…" />;
}
