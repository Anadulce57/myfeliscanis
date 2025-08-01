export default function Instrucoes() {
  return (
    <div className="min-h-screen bg-gray-50 relative font-sans">
      {/* Círculos de fundo decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-gray-200 opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-gray-200 opacity-20"></div>

      {/* Conteúdo principal */}
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-16 gap-16">
        {/* Passos */}
        <aside className="flex-1">
          <h2 className="text-2xl text-[var(--off-brown)] font-semibold mb-6">Como usar o dispositivo</h2>
          <ol className="space-y-4 list-decimal list-inside text-gray-700 text-lg leading-relaxed">
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
        <section className="flex-1 flex items-center justify-center">
          <img
            src="./public/imgs/caoGato.jpg"
            alt="Imagem de um cachorro e um gato representando os animais monitorados"
            className="rounded-xl max-w-full h-auto shadow-xl"
          />
        </section>
      </main>
    </div>
  );
}