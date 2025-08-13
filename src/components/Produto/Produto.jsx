export default function Produto() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full bg-black" />
          <nav className="hidden md:flex gap-5 text-sm text-gray-600">
            <span>Dashboard</span>
            <span>Instruções</span>
            <span>O produto</span>
            <span>Nosso jogo</span>
            <span>Quem somos?</span>
            <span>Referências</span>
          </nav>
        </div>
        <div className="text-xl">🔄</div>
      </header>

      {/* Conteúdo */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-6">
        {/* Coluna 1 - Produto */}
        <div className="flex flex-col items-center">
          <img
            src="./public/imgs/dispositivo.png"
            alt="Dispositivo"
            className="w-48 mb-4"
          />
        </div>

        {/* Coluna 2 - Descrição */}
        <div className="bg-[#0E1016] text-white p-6 rounded-lg space-y-6">
          <div>
            <h1 className="font-[Montserrat] text-[var(--off-white)] text-2xl font-bold mb-2">Smart FelisCanis</h1>
            <p className="font-[Montserrat] text-sm">
              O desenvolvimento de um dispositivo portátil IOT evidencia o potencial de inovação no mercado pet, oferecendo auxílios práticos que atendem às necessidades tanto dos animais quanto de seus tutores.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Objetivo</h2>
            <p className="font-[Montserrat] text-sm">
              Este dispositivo irá gerenciar a temperatura do ambiente, para estar em uma quantidade adequada, irá monitorar a temperatura do ambiente, qualidade do ar e informar ao tutor ou funcionário que atua no mercado pet todos os dados pelo dispositivo e pelo aplicativo.
              No aplicativo, apenas, terá como visualizar o animal por uma câmera, além de fazer uma ficha do cachorro ou gato e será notificado das próximas vacinas e vermífugos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Resultados</h2>
            <p className="font-[Montserrat] text-sm">
              Os resultados obtidos indicam que há uma demanda crescente por tecnologia voltada ao bem-estar animal, e que o uso de dispositivos inteligentes pode representar um diferencial competitivo significativo nesse setor.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}