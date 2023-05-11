import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickedLink = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className="bg-[#000] w-full py-4 px-6 flex justify-between lg:justify-end items-center fixed top-0 left-0 z-50"
        aria-label="Barra de navegação"
      >
        <div className="flex lg:hidden bg-[url('/assets/logo.png')] bg-no-repeat bg-cover bg-center rounded-full w-10 h-10"></div>
        <div className="hidden lg:flex items-center gap-10">
          <a href="#aboutme">
            <p
              className="text-white select-none hover:underline cursor-pointer active:brightness-75"
              role="link"
              tabIndex={1}
              aria-label="Sobre mim"
              onClick={handleClickedLink}
            >
              Sobre mim
            </p>
          </a>
          <a href="#skills">
            <p
              className="text-white select-none hover:underline cursor-pointer active:brightness-75"
              role="link"
              tabIndex={2}
              aria-label="Habilidades"
            >
              Habilidades
            </p>
          </a>
          <a href="#portfolio">
            <p
              className="text-white select-none hover:underline cursor-pointer active:brightness-75"
              role="link"
              tabIndex={3}
              aria-label="Portifólio"
            >
              Portifólio
            </p>
          </a>
          <a
            onClick={handleClickedLink}
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=18998071096&text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato%20para%20solicitar%20seus%20servi%C3%A7os%20de%20desenvolvimento%20e%20manuten%C3%A7%C3%A3o%20de%20software.%20Por%20favor,%20me%20informe%20como%20podemos%20conversar%20melhor%20sobre%20isso.%20Obrigado!"
          >
            <p
              className="text-black font-bold hover:underline cursor-pointer active:brightness-75 select-none bg-white rounded-full px-3 py-1"
              role="button"
              tabIndex={0}
              aria-label="Contate-me"
            >
              Contate-me
            </p>
          </a>
        </div>
        <div
          className="lg:hidden flex items-center gap-10"
          role="button"
          tabIndex={0}
          aria-label="Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <AiOutlineClose
              size={30}
              color="#fff"
              className="active:brightness-50 active:transition-all active:duration-300 select-none"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              color="#fff"
              className="active:brightness-50 active:transition-all active:duration-300 select-none"
            />
          )}
        </div>
      </div>
      <div className="h-[3.875rem] lg:h-16"></div>
      {isMenuOpen && (
        <>
          <div
            className={`bg-[rgba(0,0,0)] flex flex-col text-center fixed z-50 w-full mt-[3.875rem]`}
          >
            <a href="#aboutme" onClick={handleClickedLink}>
              <p
                className="text-white select-none hover:underline cursor-pointer active:brightness-75 py-4"
                role="link"
                tabIndex={2}
                aria-label="Sobre mim"
              >
                Sobre mim
              </p>
            </a>
            <a href="#skills" onClick={handleClickedLink}>
              <p
                className="text-white select-none hover:underline cursor-pointer active:brightness-75 py-4"
                role="link"
                tabIndex={3}
                aria-label="Habilidades"
              >
                Habilidades
              </p>
            </a>
            <a href="#portfolio" onClick={handleClickedLink}>
              <p
                className="text-white select-none hover:underline cursor-pointer active:brightness-75 py-4"
                role="link"
                tabIndex={4}
                aria-label="Portifólio"
              >
                Portifólio
              </p>
            </a>
            <a
              onClick={handleClickedLink}
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=18998071096&text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato%20para%20solicitar%20seus%20servi%C3%A7os%20de%20desenvolvimento%20e%20manuten%C3%A7%C3%A3o%20de%20software.%20Por%20favor,%20me%20informe%20como%20podemos%20conversar%20melhor%20sobre%20isso.%20Obrigado!"
            >
              <p
                className="text-black font-bold hover:underline cursor-pointer active:brightness-75 select-none bg-white px-3 uppercase py-4"
                role="button"
                tabIndex={5}
                aria-label="Contate-me"
              >
                Contate-me
              </p>
            </a>
          </div>
        </>
      )}
    </>
  );
}
