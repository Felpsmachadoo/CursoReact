import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="px-4 py-2 border border-slate-300 outline-slate-400"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="px-4 py-2 border border-slate-300 outline-slate-400"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="px-4 py-2 font-medium text-white rounded-md bg-slate-500"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
