import { useNavigate } from "react-router-dom";
import Kranjang from "../assets/kranjang.png";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="border-solid border-2 z-50 fixed absolute top-0 left-0 right-0 flex flex-col md:flex-row p-3 gap-5 w-full bg-white">
  <div className="text-3xl relative text-green-500 font-bold"></div>
  <div className="text-sm pt-2 opacity-50 text-green-500 font-bold">
    TOKPED CLONE
  </div>
  <input
    type="search"
    className="relative rounded-2xl m-0 -mr-px block w-full md:w-[50%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
    placeholder="Cari di tokpedia"
    aria-label="Cari di tokpedia"
    aria-describedby="button-addon3"
  />
  <div className="w-9 h-9">
    <img src={Kranjang} alt="Keranjang" />
  </div>
  <button
    onClick={() => navigate("/register")}
    className="bg-white text-sm font-bold rounded-lg h-8 w-16 text-green-500 border-2 border-green-500 md:mr-2"
  >
    Masuk
  </button>
  <button
    onClick={() => navigate("/register")}
    className="bg-green-500 text-sm font-bold rounded-lg h-8 w-16 text-white hover:bg-green-700"
  >
    Login
  </button>
</div>

  );
}

export default Nav;
