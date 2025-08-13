export default function Home(){
    return(
        <div className="relative h-screen overflow-auto">
        <div className="flex flex-col lg:flex-row min-h-screen items-stretch">
          {/* Left Column */}
          <div className="w-full h-dvh lg:w-1/2 flex flex-col justify-center items-center p-8">
            <img src="./public/imgs/pets.jpg" alt="pets" className="w-full h-auto max-w-md lg:max-w-full rounded-lg shadow-lg"/>
            <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 mt-8 text-left">Venha conhecer mais sobre a nossa 
            empresa e produtos. E fazer parte do avanço tecnológico no mercado Pet!</h1>
          </div>
  
          {/* Right Column */}
          <div className="w-full lg:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center">
            <div className="mb-9">
              <h1 className="text-3xl font-bold mb-4">A empresa</h1>
              <p className="text-gray-300 text-lg">Atualmente o mercado pet tem crescido rapidamente, impulsionado pelo aumento 
              do número de animais de estimação e pela valorização dos cuidados com seu bem-estar. Hoje, os pets são vistos 
              como membros da família, o que estimula a busca por produtos e serviços especializados. Esse cenário reforça a 
              importância de discutir a melhora dos cuidados com os animais e os impactos desse setor em expansão.</p>
            </div>
  
            <div className="mb-9">
              <h1 className="text-3xl font-bold mb-4">Objetivo</h1>
              <p className="text-gray-300 text-lg">Impactar o mercado pet, que está em crescente expansão, a partir do uso da 
              tecnologia de monitoramento e gerenciamento.</p>
            </div>
  
            <div>
              <h1 className="text-3xl font-bold mb-4">Metodologia</h1>
              <p className="text-gray-300 text-lg">A metodologia da pesquisa aplicada foi revisão bibliográfica de artigos 
              científicos publicados entre 2019 e 2022.</p>
            </div>
          </div>
        </div>
       </div>
    )
}