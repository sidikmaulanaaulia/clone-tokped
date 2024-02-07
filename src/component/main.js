import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import icon_kategory_1 from "../assets/icon_kategory_1.png";
import icon_kategory_2 from "../assets/icon_kategory_2.png";
import icon_kategory_3 from "../assets/icon_kategory_3.png";
import icon_kategory_4 from "../assets/icon_kategory_4.png";
import icon_kategory_5 from "../assets/icon_kategory_5.png";
import icon_kategory_6 from "../assets/icon_kategory_6.png";

function Main() {
  const data = [
    {
      label: "Pulsa",
      value: "pulsa",
      desc: (
        <div className="grid grid-cols-3 gap-4 flex">
          <div className=" text-sm font-bold opacity-70">
            nomor telpon
            <input
              className="border-2 rounded-lg p-1 w-44 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 "
              type="text"
            />
          </div>
          <div className="text-sm font-bold opacity-70">
            nomor telpon
            <input
              className="border-2 rounded-lg p-1 w-44 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 "
              type="text"
            />
          </div>
          <div className=" ml-8 pt-5">
            <button className="border-2 p-1 rounded-lg w-full ">Beli</button>
          </div>
        </div>
      ),
    },
    {
      label: "Paket Data",
      value: "paket data",
      desc: (
        <div className="grid grid-cols-3 gap-4 flex">
          <div className=" text-sm font-bold opacity-70">
            nomor telpon
            <input
              className="border-2 rounded-lg p-1 w-44 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 "
              type="text"
            />
          </div>
          <div className="text-sm font-bold opacity-70">
            nomor telpon
            <input
              className="border-2 rounded-lg p-1 w-44 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 "
              type="text"
            />
          </div>
          <div className=" ml-8 pt-5">
            <button className="border-2 p-1 rounded-lg w-full ">Beli</button>
          </div>
        </div>
      ),
    },

    {
      label: "Flight",
      value: "flght",
      desc: `Belanja di tokopedia`,
    },

    {
      label: "Listrik Pln",
      value: "listrik pln",
      desc: `Belanja di tokopedia`,
    },
  ];
  return (
    <div className="border-2 border solid pt-14 pb-4  mt-4 shadow-lg">
 <div className="flex flex-col md:flex-row gap-4">
  <div className="flex overflow-x-auto gap-3 justify-center">
    <div className="border-2 border-solid rounded-lg p-3 text-center">
      <img className="w-24 h-16" src={img1} alt="Baju" />
      <p>Baju</p>
    </div>
    <div className="border-2 border-solid text-center rounded-lg p-3">
      <img className="w-24 h-16" src={img2} alt="Sepatu" />
      <p>Sepatu</p>
    </div>
    <div className="border-2 border-solid text-center rounded-lg p-3">
      <img className="w-24 h-16" src={img3} alt="T-shirt" />
      <p>T-shirt</p>
    </div>
    <div className="border-2 border-solid text-center rounded-lg p-3">
      <img className="w-24 h-16" src={img3} alt="T-shirt" />
      <p>T-shirt</p>
    </div>
  </div>

  <div className="border-2 rounded-lg mt-5 md:mt-0">
    <Tabs id="custom-animation" value="pulsa">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  </div>
</div>


      <div className="flex flex-col md:flex-row gap-4 mt-5 justify-center ">
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_1} />
          Kategori
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_2} />
          Handphone & Tablet
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_3} />
          Top Up & Tagihan
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_4} />
          Flight & Entertiment
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_5} />
          Perawatan Hewan
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_6} />
          Keuangan
        </p>
        <p className="p-2 gap-2 flex border-2 border-solid rounded-full hover:bg-green-500 duration-300 hover:text-white ">
          <img className="w-7 h-7" src={icon_kategory_2} />
          Komputer
        </p>
      </div>
    </div>
  );
}

export default Main;
