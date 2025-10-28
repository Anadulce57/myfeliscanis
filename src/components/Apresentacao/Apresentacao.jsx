import imgCg from "/imgs/caoGato.jpg";

export default function Apresentacao() {
  const ChangePage = () => {
    if (window.innerWidth < 768) {
      window.location.href = "https://aplicativo-felis-canis.vercel.app/";
    } else {
      alert("Acesse pelo celular!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="text-center mb-8 lg:mt-4.5 scroll-p-[0.5]">
        <h1 className="font-[Gloock] text-4xl font-bold lg:mt-1 text-3.75 dark:text-amber-50">
          Bem vindo/a á
        </h1>
        <h1 className="font-[Gloock] text-4xl font-bold lg:mt-3 text-3.75 dark:text-amber-50">
          FelisCanis Care
        </h1>
      </header>

      <section className="flex flex-col items-center justify-center">
        <img
          src={imgCg}
          alt="Imagem de um cachorro e um gato"
          className="w-3/4 max-w-xs sm:max-w-sm h-auto shadow-xl rounded-sm mb-12"
        />
        <div className="container text-center mt-4">
          <p className="font-[Montserrat] text-lg dark:text-amber-50">
            Um novo olhar tecnológico no mercado pet
          </p>
        </div>

        <button
          onClick={ChangePage}
          className="mt-8 px-8 py-3 bg-amber-50 text-gray-800 font-bold rounded-full shadow-lg hover:bg-gray-800 hover:text-amber-50 transition duration-300"
        >
          Ao aplicativo
        </button>
      </section>
    </div>
  );
}
