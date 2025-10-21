import imgCg from "/imgs/caoGato.jpg";
import Header from "../Navegacao/Header";

export default function Instrucoes() {
  return (
    <div className="min-h-screen">
     <Header/>
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-16 gap-16">
        {/* Passos */}
        <aside className="flex-1">
          <h2 className="text-2xl text-off-brown text-gray-850 font-semibold mb-6 mt-7 dark:text-off-white">Como usar o dispositivo</h2>
          <ol className="space-y-4 list-decimal list-inside text-lg leading-relaxed text-black dark:text-white items-end mt-21">
            <li>Instale o dispositivo na parede pelo material de trás.</li>
            <li>
            Configure pelo app/painel: Faça a ficha de seu bebê.
            </li>
            <li>Monitore em tempo real a temperatura do ambiente, qualidade do ar e liberação de gás.</li>
            <li>
            Controle automático: Alerte o animal nos locais em que ele não deve ficar.
            </li>
            <li>Acesse o histórico de dados do pet.</li>
            <li>-Faça manutenção regular: Nos envie mensagem pelo nosso Instagram que liberamos um e-mail para você.</li>
          </ol>
        </aside>

        {/* Imagem */}
        <section className="flex-1 flex items-center justify-center h-screen mx-auto">
          <img
            src={imgCg}
            alt="Imagem de um cachorro e um gato"
            className=" max-w-full h-auto shadow-xl rounded-sm align-center justify-center mb-50"
          />
        </section>
      </main>
    </div>
  );
}