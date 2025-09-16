import Header from "../Navegacao/Header"
import Imagem from "/imgs/pets.jpg"

export default function Home(){
    return(
        <div className="min-h-screen font-sans text-gray-800  dark:text-white">
          <Header/>
        <section className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 py-16 gap-16 p-4 w-full">
          <div className="w-full h-dvh flex flex-col justify-center items-center p-8">
            <img src={Imagem} alt="pets" className=" w-[682] h-[401] max-w-md lg:max-w-full rounded-sm shadow-lg my-1 translate-y-[-65px]"/>
            <h1 className="text-4xl font-[Montserrat] lg:text-3xl font-bold text-gray-900 mt-7 text-left translate-y-[-10px] dark:text-white">Venha conhecer mais sobre a nossa 
            empresa e produtos. E fazer parte do avanço tecnológico no mercado Pet!</h1>
          </div>
  
          <div className="w-full lg:w-[700px] h-[250] bg-dark-blue text-white p-8 flex flex-col justify-center rounded-sm dark:bg-[#5B8266] ">
            <div className="mb-9">
              <h1 className="text-3xl font-bold mb-3 font-[Montserrat]">A empresa</h1>
              <p className="text-gray-300 text-lg font-[Montserrat]">Atualmente o mercado pet tem crescido rapidamente, impulsionado pelo aumento 
              do número de animais de estimação e pela valorização dos cuidados com seu bem-estar. Hoje, os pets são vistos 
              como membros da família, o que estimula a busca por produtos e serviços especializados. Esse cenário reforça a 
              importância de discutir a melhora dos cuidados com os animais e os impactos desse setor em expansão.</p>
            </div>
  
            <div className="mb-9">
              <h1 className="text-3xl font-bold mb-4">Objetivo</h1>
              <p className="text-gray-300 text-lg font-montserrat">Impactar o mercado pet, que está em crescente expansão, a partir do uso da 
              tecnologia de monitoramento e gerenciamento.</p>
            </div>
  
            <div>
              <h1 className="text-3xl font-bold mb-4">Metodologia</h1>
              <p className="text-gray-300 text-lg font-[Montserrat]">A metodologia da pesquisa aplicada foi revisão bibliográfica de artigos 
              científicos publicados entre 2019 e 2022.</p>
            </div>
          </div>
        </section>
       </div>
    )
}