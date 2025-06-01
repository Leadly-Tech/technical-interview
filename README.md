# 📝 Candidate Instructions – Next.js “TODO List” Coding Exercise

Welcome 👋
Below is **everything you need to implement a fully-working TODO application** from the stripped-down codebase you’ve been given.
Please read the whole document — it is the single source of truth for requirements, constraints, and what we will evaluate.

---

## 1 Project Goal

Restore full functionality to the supplied Next.js 15 (+ App Router) project so that it behaves as a polished, single-page TODO list:

| Feature              | Behaviour                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| **Add**              | Users can add new tasks.                                                                           |
| **Toggle**           | A checkbox marks tasks complete/incomplete.                                                        |
| **Auto-re-order**    | Completed tasks always sort to the bottom.                                                         |
| **Edit**             | Clicking the task label lets users edit the text inline; **Enter** or blur saves, **Esc** cancels. |
| **Delete**           | Users can delete any task.                                                                         |
| **Search**           | Filtering textbox shows only tasks whose text contains the query (case-insensitive).               |
| **Persistence**      | List state survives full-page reloads via the browser’s `localStorage`.                            |
| **Hydration safety** | No React hydration warnings/errors in the console.                                                 |

---

## 2 Starting Point

```text
├─ app/
│  └─ page.tsx
├─ components/
│  ├─ search-box.tsx
│  ├─ todo-form.tsx
│  └─ todo-list.tsx
├─ hooks/
│  └─ usePersistentState.ts
├─ types/
│  └─ todo.ts
└─ ...
```

All event handlers are currently **empty** (`() => {}`) and the persistent-state hook contains **no implementation**. Your job is to fill the gaps **without moving files** or renaming exports.

---

## 3 Mandatory Requirements

### 3.1 Functional

1. **Add tasks** – through `<TodoForm />`.
2. **Persistent storage** – tasks must re-appear after refreshing the page (no database).
3. **Toggle complete** – checkbox flips `completed` flag.
4. **Autosort** – incomplete first, complete last (update both on toggle and add).
5. **Inline edit** – click text → input appears; see behaviour table above.
6. **Delete** – ✕ button removes task.
7. **Search filter** – `<SearchBox />` hides non-matching tasks live as user types.
8. **No hydration mismatch** – the console must be free of “hydration failed” warnings.

### 3.2 Technical

1. **Custom Hook** `usePersistentState`

   - Generic: `usePersistentState<T>(key, initialValue)`
   - Exposes `[value, setValue, hasHydrated]`.

2. **State Management**

   - All global task state lives in `app/page.tsx` using the hook above.

3. **Type Safety**

   - No `any`; respect the `Todo` interface supplied.

4. **No backend / database** – everything is client-side.
5. **No additional state libraries** (Redux, Zustand, etc.).
6. **React 18 / Next 15 conventions** – stay within the App Router paradigm (`"use client"` at file top where needed).

## 4 Local Setup & Useful Scripts

```bash
# 1 Install
npm install

# 2 Run dev server
npm run dev
```
