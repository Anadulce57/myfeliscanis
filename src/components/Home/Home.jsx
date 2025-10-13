import Header from "../Navegacao/Header"
import Imagem from "/imgs/pets.jpg"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* 1. ADICIONADO: pt-24 para compensar o header fixo. 
        2. REMOVIDO: p-4 redundante.
        3. AJUSTADO: items-start para garantir que o conteúdo comece do topo (topo alinhado com a caixa da direita).
        4. AJUSTADO: gap-12 para espaçamento mais apertado, como na imagem.
      */}
      <section className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 pt-24 py-10 gap-12 lg:gap-16 w-full items-start">
        
        {/* Coluna 1 - Imagem e Título de Boas-vindas */}
        {/* AJUSTADO: lg:w-1/2 ou w-full para melhor flexibilidade. lg:items-start para alinhar à esquerda no desktop. */}
        {/* REMOVIDO: p-8/lg:p-0 desnecessários que podem ter causado espaçamento indesejado. */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"> 
          
          {/* Imagem: Ajustei a largura máxima e removi as dimensões fixas no desktop. */}
          <img
            src={Imagem}
            alt="pets"
            className="w-full max-w-lg lg:max-w-none rounded-sm shadow-lg mb-8"
          />
          
          {/* Título: Ajustei a margem superior para espaçar do conteúdo acima. */}
          <h1 className="text-4xl font-montserrat lg:text-3xl font-bold text-dark-blue text-center lg:text-left dark:text-off-white">
            Venha conhecer mais sobre a nossa empresa e produtos. E fazer parte do avanço tecnológico no mercado Pet!
          </h1>
        </div>

        {/* Coluna 2 - Caixa de Informações */}
        {/* AJUSTADO: w-full no mobile, e um tamanho mais específico para desktop. Adicionado space-y-8 para espaçamento interno mais limpo. */}
        <div className="w-full lg:w-[700px] bg-dark-blue text-off-white p-8 space-y-8 rounded-sm dark:bg-green">
          
          {/* A Empresa */}
          <div>
            {/* Mantido hidden lg:inline: O texto deve aparecer apenas no desktop */}
            <h1 className="text-3xl font-bold mb-3 font-montserrat hidden lg:inline">A empresa</h1>
            <p className="text-off-white text-lg font-montserrat hidden lg:inline">
              Atualmente o mercado pet tem crescido rapidamente, impulsionado pelo aumento do número de animais de
              estimação e pela valorização dos cuidados com seu bem-estar. Hoje, os pets são vistos como membros da
              família, o que estimula a busca por produtos e serviços especializados. Esse cenário reforça a importância
              de discutir a melhora dos cuidados com os animais e os impactos desse setor em expansão.
            </p>
          </div>

          {/* Objetivo */}
          <div>
            {/* Mantido hidden lg:inline: O título deve aparecer apenas no desktop */}
            <h1 className="text-3xl font-bold mb-4 hidden lg:inline">Objetivo</h1>
            <p className="text-off-white text-lg font-montserrat">
              Impactar o mercado pet, que está em crescente expansão, a partir do uso da tecnologia de monitoramento e
              gerenciamento.
            </p>
          </div>

          {/* Metodologia */}
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