import { toast } from "react-toastify";


export const TostiFy = () => {
    const btn = ()=>{
        toast.success("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  return (
    <div className="flex items-center justify-center pt-7">
      <button
        onClick={() => {
          btn();
        }}
        className="bg-slate-700 text-white px-3 py-1 text-center rounded-lg"
      >
        ToastiFy
      </button>
    </div>
  );
}
