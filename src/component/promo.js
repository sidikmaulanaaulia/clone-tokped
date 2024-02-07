import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import promo from "../assets/promo.png";

function Promo() {
  return (
    <div>
      <div className="block mt-8 border-2 p-3">
        <div className="flex col-start-2 col-span-4 font-sans gap-4 ">
          <h1 className="font-bold text-2xl">Teraktiran Pengguna Baru</h1>
          <p className="mt-2">Berakhir dalam </p>
        </div>
        <div className="flex overflow-x-auto p-10 gap-5 mt-5 ">
          <div className="border-2 border-solid rounded-lg p-3 shadow-lg  bg-white ">
            <img className="w-40 h-32" src={img1} />
            <p className="font-bold">Rp.10.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img2} />
            <p>Rp.30.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg ">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.70.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.40.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.40.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bagian kedua promo */}

      <div className="block mt-8 border-2 p-3">
        <div className="flex col-start-2 col-span-4 font-sans gap-4 ">
          <h1 className="font-bold text-2xl">Promo Bulan Ini</h1>
          <p className="mt-2">Berakhir dalam </p>
        </div>
        <div className="flex overflow-x-auto p-10 gap-5 mt-5">
          <div className="border-2 border-solid rounded-lg p-3 shadow-lg bg-white ">
            <img className="w-40 h-32" src={img1} />
            <p>Rp.10.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img2} />
            <p>Rp.30.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg ">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.70.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.40.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
          <div className="border-2 border-solid h-64 rounded-lg p-3  shadow-lg">
            <img className="w-40 h-32" src={img3} />
            <p>Rp.40.000</p>
            <div className="flex pt-2">
              <div className="bg-red-300 p-1 text-red-500 w-8 rounded-lg text-xs">
                60%
              </div>
              <div className="text-xs pt-1 pl-1 opacity-50 line-through">
                Rp.2.000
              </div>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4 rounded-lg">
              <div className="h-1 bg-red-600 w-12 rounded-lg"></div>
              <div className="font-bold text-xs opacity-70 pt-2">
                Segera habis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
