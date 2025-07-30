export default function Instrucoes() {
  return (
    <div className="min-h-screen bg-gray-50 relative font-sans">
      {/* Círculos de fundo decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-gray-200 opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-gray-200 opacity-20"></div>

      {/* Conteúdo principal */}
      <main className="flex max-w-7xl mx-auto px-12 py-16 gap-16">
        {/* Passos vertical */}
        <aside className="flex flex-col space-y-6 text-lg text-black font-light">
          <span>Passo 1</span>
          <span>Passo 2</span>
          <span>Passo 3</span>
          <span>Passo 4</span>
          <span>Passo 5</span>
        </aside>

        {/* Imagem */}
        <section className="flex-1 flex items-center justify-center">
          <img
            src="./public/imgs/caoGato.jpg"
            alt="CachorroGato"
            className="rounded-md max-w-full h-auto shadow-lg"
          />
        </section>
      </main>
    </div>
  );
}