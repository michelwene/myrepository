import Image from "next/image";
import { BsTools } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";
import { TbBugOff } from "react-icons/tb";

export default function AboutMe() {
  return (
    <div className="w-full h-auto py-10" id="aboutme">
      <div className="container mx-auto flex-1">
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="border-8 border-black  px-8 lg:px-14 py-5">
            <p className="font-montserrat font-bold text-3xl uppercase">
              Sobre mim
            </p>
          </div>
          <p className="font-sant font-normal text-[15px] w-3/4 lg:w-1/2 mt-8 text-justify lg:text-center">
            Sou desenvolvedor fullstack com mais de um ano de experiência em
            desenvolvimento de aplicações WEB e aplicativos móveis. Minhas
            principais expertises são em ReactJS, React Native, Typescript,
            Context API,Redux, PHP e Laravel. Além disso, tenho experiência em
            integrações de API&apos;s Graphql e na utilização de bibliotecas de
            estilos como Tailwind CSS, Material UI e Fluent UI. Também possuo
            habilidades em Docker e Docker Compose, entre outras técnologias
            disponíveis no mercado.
          </p>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="my-14 uppercase active:opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75 flex items-center justify-center flex-1 border-x-4 border-black max-w-[200px] w-full mx-auto py-2 px-2 font-montserrat font-bold">
            Explorar
          </button>
        </a>
        <div className="my-10">
          <Image
            src={"/assets/separator_black.png"}
            alt="Logo empresa M&W"
            width={200}
            height={100}
            className="mx-auto object-contain"
          />
        </div>

        <div className="w-[70%] mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <BsTools className="absolute -top-[10px] -left-[20px] text-5xl text-gray-300" />
              <div className="relative z-50">
                <h3 className="font-montserrat text-[22px] font-bold">
                  Desenvolvimento
                </h3>
                <p className="font-light text-sm mt-2 text-justify">
                  Desenvolvo soluções personalizadas de software para atender às
                  necessidades exclusivas de cada cliente. Minhas habilidades
                  incluem arquitetura de software e gerenciamento de projetos
                  ágeis.
                </p>
              </div>
            </div>
            <div className="relative">
              <TbBugOff className="absolute -top-[10px] -left-[20px] text-5xl text-gray-300" />
              <div className="relative z-50">
                <h3 className="font-montserrat text-[22px] font-bold">
                  Manutenção
                </h3>
                <p className="font-light text-sm mt-2 text-justify">
                  Além de desenvolver soluções personalizadas de software,
                  também ofereço serviços de manutenção para garantir que seus
                  sistemas continuem funcionando sem problemas. Meu trabalho
                  inclui aprimoramentos, correções de bugs e atualizações
                  regulares para manter seu software atualizado e seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Image
            src={"/assets/separator_black.png"}
            alt="Logo empresa M&W"
            width={200}
            height={100}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
