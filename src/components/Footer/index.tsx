import { HiChevronDoubleUp } from "react-icons/hi";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#000] w-full py-4 px-6 flex justify-center items-center flex-col">
        <div className="flex items-center gap-10">
          <a href="#" className="focus:not-sr-only">
            <div>
              <HiChevronDoubleUp className="text-white text-2xl cursor-pointer mx-auto animate-bounce" />
            </div>
            <p className="text-white cursor-pointer hover:underline font-montserrat text-2xl sr-only sm:not-sr-only">
              Voltar ao topo
            </p>
          </a>
        </div>
        <ul className="flex gap-4 my-10">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" h-10 w-10 shadow-md rounded-md flex items-center justify-center active:brightness-75">
                <AiOutlineInstagram className="text-white h-[34px] w-[34px] active:opacity-60" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/michelwene"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" h-10 w-10 shadow-md rounded-md  flex items-center justify-center active:brightness-75">
                <AiOutlineGithub className="text-white h-[34px] w-[34px] active:opacity-60" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" h-10 w-10 shadow-md rounded-md  flex items-center justify-center active:brightness-75">
                <AiFillLinkedin className="text-white h-[34px] w-[34px] active:opacity-60" />
              </div>
            </a>
          </li>
        </ul>
        <div>
          <p className="font-monteserrat text-white text-center">
            <strong>© {year} Michel Wene.</strong> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
