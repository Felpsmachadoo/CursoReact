import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <div className="relative flex justify-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 bottom-0 left-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl font-bold text-center text-slate-100">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="p-4 rounded-md bg-slate-200">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
