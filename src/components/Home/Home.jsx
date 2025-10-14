import Header from "../Navegacao/Header"
import Imagem from "/imgs/pets.jpg"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 pt-24 py-10 gap-12 lg:gap-16 w-full items-start">

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"> 
          
  
          <img
            src={Imagem}
            alt="pets"
            className="w-full lg:max-w-none max-w-lg rounded-sm shadow-lg mb-8"
          />
          
          <h1 className="text-4xl font-montserrat lg:text-3xl font-bold text-dark-blue text-center lg:text-left dark:text-off-white">
            Venha conhecer mais sobre a nossa empresa e produtos. E fazer parte do avanço tecnológico no mercado Pet!
          </h1>
        </div>

        <div className="w-full lg:w-[700px] bg-dark-blue text-off-white p-8 space-y-8 rounded-sm dark:bg-green">
          
          <div>
            <h1 className="text-3xl font-bold mb-3 font-montserrat hidden lg:inline">A empresa</h1>
            <p className="text-off-white text-lg font-montserrat hidden lg:inline">
              Atualmente o mercado pet tem crescido rapidamente, impulsionado pelo aumento do número de animais de
              estimação e pela valorização dos cuidados com seu bem-estar. Hoje, os pets são vistos como membros da
              família, o que estimula a busca por produtos e serviços especializados. Esse cenário reforça a importância
              de discutir a melhora dos cuidados com os animais e os impactos desse setor em expansão.
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 hidden lg:inline">Objetivo</h1>
            <p className="text-off-white text-lg font-montserrat">
              Impactar o mercado pet, que está em crescente expansão, a partir do uso da tecnologia de monitoramento e
              gerenciamento.
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">Metodologia</h1>
            <p className="text-off-white text-lg font-montserrat">
              A metodologia da pesquisa aplicada foi revisão bibliográfica de artigos científicos publicados entre 2019
              e 2022.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}