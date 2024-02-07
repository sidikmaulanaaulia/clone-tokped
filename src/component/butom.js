import icon_one from "../assets/icon_one.png";
import icon_two from "../assets/icon_two.png";
import icon_three from "../assets/icon_three.png";
import icon_tokped from "../assets/icon_tokped.png";
import icon_faceboolk from "../assets/icon_faceboolk.png";
import icon_path from "../assets/icon_path.png";
import icon_instragram from "../assets/icon_instragram.png";
import icon_twiter from "../assets/icon_twiter.png";
import icon_kebijakan from "../assets/icon_kebijakan.png";
function Butom() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 mt-4 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
      <div>
        <nav>
          <h1 className="font-bold">Tokopedia</h1>
          <ul className="opacity-70">
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tentang tokopedia
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              hak kekayaan intelektual
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">karir</li>
            <li className="pt-1 cursor-pointer hover:text-green-500">blog</li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              blogstory
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tokopedia parents
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              mitra blog
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tokopedia afiliator program
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tokopedai b2b digital
            </li>
          </ul>
        </nav>
        <nav>
          <h1 className="font-bold pt-4">beli</h1>
          <ul className="opacity-70">
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tagiahan & top up
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tukar tambah handphone
            </li>
            <li className="pt-1 cursor-pointer hover:text-green-500">
              tokopedia cod
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <h1 className="font-bold">jual</h1>
          <ul className="opacity-70">
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              pusat edukasi seller
            </li>
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              mitra topers
            </li>
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              daftar official store
            </li>
          </ul>
        </nav>

        <nav>
          <h1 className="font-bold pt-4">bantuan dan panduan</h1>
          <ul className="opacity-70">
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              tokopedia care
            </li>
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              syarat dan ketentuan
            </li>
            <li className=" pt-1 cursor-pointer hover:text-green-500">
              kebijakan privasi
            </li>
            <li className=" pt-1 cursor-pointer hover:text-green-500">mitra</li>
          </ul>
        </nav>

        <nav>
          <h1 className="font-bold pt-4">keamanan & privasi</h1>
          <img className="w-42 h-16 pt-2 cursor-pointer" src={icon_kebijakan} />
        </nav>
      </div>
      <div>
        <div className="font-bold">
          <h1> ikuti kami</h1>
          <div className="flex gap-2 pt-3">
            <img className="w-6 h-6 cursor-pointer" src={icon_instragram} />
            <img className="w-6 h-6 cursor-pointer" src={icon_twiter} />
            <img className="w-6 h-6 cursor-pointer" src={icon_path} />
            <img className="w-6 h-6 cursor-pointer" src={icon_faceboolk} />
          </div>
        </div>
        <div>
          <div className="pt-3">
            <img className="w-92 h-52 " src={icon_tokped} />
            <div className="flex pt-2">
              <img className="w-32 h-12 cursor-pointer" src={icon_one} />
              <img className="w-32 h-12 cursor-pointer" src={icon_two} />
              <img className="w-32 h-12 cursor-pointer" src={icon_three} />
            </div>
            <div className="text-center pt-4 opacity-50 font-bold">
              <p>2019-2023 ,tokopedia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Butom;
