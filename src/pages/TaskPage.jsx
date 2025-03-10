import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen p-6 bg-slate-500">
      <div className="w-full max-w-lg mx-auto space-y-4">
        <div className="relative flex justify-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 p-2 -translate-y-1/2 rounded-md top-1/2 text-slate-100 hover:bg-slate-600"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <Title>Detalhes da Tarefa</Title>
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
