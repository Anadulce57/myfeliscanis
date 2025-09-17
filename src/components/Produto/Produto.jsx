import dispositivo from "/imgs/dispositivo.png";
import Header from "../Navegacao/Header"

export default function Produto() {
  return (
    <div className="min-h-screen font-sans dark:text-white">
      <Header />

      {/* Conteúdo */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-24 px-8 py-20 items-start w-full"> 
        {/* Coluna 1 - Produto */}
        <div className="flex flex-col items-center gap-5 p-5 translate-y-[-24px]">
          <img
            src={dispositivo}
            alt="Dispositivo"
            className="w-80 my-1"
          />

          {/* Caixa de preços embaixo da imagem */}
          <div className="bg-dark-blue text-white p-10 rounded-sm w-full max-w-sm text-lg dark:bg-green ">
            <p>Placa Arduino – R$ 73,06</p>
            <p>Protoboard – R$ 5,69</p>
          </div>
        </div>

        {/* Coluna 2 - Descrição */}
        <div className="bg-dark-blue text-white p-6 rounded-sm space-y-6 dark:bg-green">
          <div>
            <h1 className="font-montserrat text-off-white text-2xl font-bold mb-2">
              Smart FelisCanis
            </h1>
            <p className="font-montserrat text-sm">
              O desenvolvimento de um dispositivo portátil IOT evidencia o potencial de inovação no mercado pet, oferecendo auxílios práticos que atendem às necessidades tanto dos animais quanto de seus tutores.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Objetivo</h2>
            <p className="font-montserrat text-sm">
              Este dispositivo irá gerenciar a temperatura do ambiente, para estar em uma quantidade adequada, irá monitorar a temperatura do ambiente, qualidade do ar e informar ao tutor ou funcionário que atua no mercado pet todos os dados pelo dispositivo e pelo aplicativo.
              No aplicativo, apenas, terá como visualizar o animal por uma câmera, além de fazer uma ficha do cachorro ou gato e será notificado das próximas vacinas e vermífugos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Resultados</h2>
            <p className="font-montserrat text-sm">
              Os resultados obtidos indicam que há uma demanda crescente por tecnologia voltada ao bem-estar animal, e que o uso de dispositivos inteligentes pode representar um diferencial competitivo significativo nesse setor.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
