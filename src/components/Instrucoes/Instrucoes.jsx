import Header from "../Navegacao/Header"

export default function Instrucoes() {
  return (
    <div className="min-h-screen relative pt-2">
     <Header/>
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-16 gap-16">
        {/* Passos */}
        <aside className="flex-1">
          <h2 className="text-2xl text-[var(--off-brown)]  text-gray-850 font-semibold mb-6 mt-7 ">Como usar o dispositivo</h2>
          <ol className="space-y-4 list-decimal list-inside text-lg leading-relaxed text-black dark:text-white items-end mt-21">
            <li>Instale o dispositivo na incubadora e conecte à energia.</li>
            <li>
              Configure pelo app ou painel: defina o tipo de animal e a temperatura ideal.
              Monitore em tempo real a temperatura do ambiente.
            </li>
            <li>Receba alertas se a temperatura sair do ideal.</li>
            <li>
              Controle automático: ativa aquecimento ou ventilação conforme necessário.
            </li>
            <li>Acesse o histórico de dados e relatórios.</li>
            <li>Faça manutenção regular: limpeza e verificação da energia.</li>
          </ol>
        </aside>

        {/* Imagem */}
        <section className="flex-1 flex items-center justify-center h-screen mx-auto">
          <img
            src="./imgs/caoGato.jpg"
            alt="Imagem de um cachorro e um gato representando os animais monitorados"
            className=" max-w-full h-auto shadow-xl rounded-sm mb-90"
          />
        </section>
      </main>
    </div>
  );
}