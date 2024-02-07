import star from "../assets/star.png";
import title from "../assets/title.png";
import { Context } from "../consume api/context";
import { useContext } from "react";

function Shop() {
  const { product } = useContext(Context);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
  <button
    className="w-full md:w-56 h-14 border-1 text-white rounded-lg bg-pink-600"
    type="button"
    role="tab"
  >
    For you
  </button>
  <button
    className="w-full md:w-56 h-14 border-2 text-white rounded-lg bg-blue-500"
    type="button"
    role="tab"
  >
     Special Discount
  </button>
  <button
    className="w-full md:w-56 h-14 border-2 text-white rounded-lg bg-amber-400"
    type="button"
    role="tab"
  >
    Furmiture
  </button>
  <button
    className="w-full md:w-56 h-14 border-2 text-white rounded-lg bg-green-500"
    type="button"
    role="tab"
  >
    Atsan Pria
  </button>
  <button
    className="w-full md:w-56 h-14 border-2 text-white rounded-lg bg-pink-600"
    type="button"
    role="tab"
  >
    Batik Pria
  </button>
</div>

      <div className="flex flex-wrap justify-center gap-4 p-10 mt-5">
  {product.map((p) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-xl border-2 p-5 cursor-pointer" key={p.id}>
        <img className="w-full h-32 object-cover" src={p.image} alt="" />
        <p className="text-xs mt-3">{p.title}</p>
        <p>${p.price}</p>
        <div className="flex mt-1">
          <img className="w-6 h-6" src={title} alt="Location" />
          <div className="text-sm opacity-70 mt-1">Tangerang</div>
        </div>
        <div className="flex mt-2 ">
          <img className="w-4 h-4" src={star} alt="Rating" />
          <p className="opacity-70 text-xs">4.4 | Terjual 100+</p>
        </div>
      </div>
    );
  })}
</div>

      <div className="text-center mt-1 ">
        <button className="p-3 border-2 pr-16 pl-16 rounded-lg border-green-500 font-bold text-green-500 hover:bg-green-500 hover:text-white">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}

export default Shop;
