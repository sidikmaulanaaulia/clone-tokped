import register from "../assets/register.png";
import icon_google from "../assets/icon_google.png";

function Register() {
  return (
    <>
    <div className="container p-4">
  <div className="flex font-mono justify-center text-3xl relative text-green-500 font-bold mt-5">
    Clone Tokped
  </div>
  <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
    <div className="grid justify-items-stretch">
      <div className="justify-self-center">
        <img className="w-full md:w-5/6 h-3/4" src={register} alt="Register Image" />
        <div className="text-2xl font-bold mt-3 text-center">
          Jual beli mudah hanya di Tokopedia
        </div>
        <div className="mt-1 text-sm opacity-70 text-center">
          Gabung dan rasakan bertransaksi di Tokopedia
        </div>
      </div>
    </div>

    <div className="border-2 shadow-lg p-8 mt-4 md:mt-0">
      <div className="basis-1/2">
        <h1 className="font-bold text-2xl text-center">Daftar sekarang</h1>
        <div className="text-center pt-1">
          <span>
            Sudah punya akun Tokopedia?
            <a href="#" className="text-green-500"> Masuk</a>
          </span>
        </div>
        <div className="grid justify-items-stretch mt-5">
          <div className="flex gap-24 w-full border-2 p-2 rounded-lg justify-self-center">
            <img className="w-5 h-5 ml-3" src={icon_google} alt="Google Icon" />
            <button className="font-bold opacity-75" type="button">
              Google
            </button>
          </div>
          <div className="text-sm opacity-50 text-center pt-4">
            atau daftar dengan :
          </div>
        </div>
        <form className="mt-5">
          <div className="text-sm">
            <label>Phone number and Email</label>
          </div>
          <div>
            <input className="border-2 w-full p-2 rounded-lg" type="text" />
          </div>
          <div className="opacity-70 text-sm mt-1">
            <p>Example: tokopedia@gmail.com </p>
          </div>
          <div className="mt-3">
            <button
              onClick={() => {
                alert("Sedang dalam perbaikan");
              }}
              className="border-2 p-3 w-full opacity-70 rounded-2xl text-xl font-bold bg-sky-500"
              type="button"
            >
              Daftar
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <div className="opacity-50 text-sm">
            Dengan mendaftar, saya menyetujui
          </div>
          <a href="#" className="text-sm text-green-500">Syarat dan Ketentuan</a>{" "}
          <span className="text-sm opacity-50">serta</span>
          <a href="#" className="text-green-500"> Kebijakan Privasi</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Register;
