import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Main() {
  return (
    <div className="w-full h-auto max-[1024px]:bg-[url('/assets/mobile_bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto flex-1">
        <div className="flex items-center px-7 py-24 flex-col justify-between lg:mt-28">
          <div>
            <p className="text-white lg:text-black font-normal text-[25px] font-advent_pro lg:text-[50px] select-none">
              Meu nome é Michel Wene
            </p>
          </div>
          <div>
            <p className="text-white lg:text-[#909090] font-semibold lg:font-bold font-sans text-[32px] lg:text-[30px] select-none text-center">
              Eu sou desenvolvedor Full-Stack
            </p>
            <div className="hidden lg:flex my-10">
              <Image
                src={"/assets/separator_black.png"}
                alt="Logo empresa M&W"
                width={200}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
            <div className="flex lg:hidden my-10">
              <Image
                src={"/assets/separator_white.svg"}
                alt="Logo empresa M&W"
                width={200}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
          </div>

          <ul className="flex gap-4 my-10">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" h-10 w-10 shadow-md rounded-md flex items-center justify-center active:brightness-75">
                  <AiOutlineInstagram className="text-white lg:text-black h-[34px] w-[34px] active:opacity-60" />
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
                  <AiOutlineGithub className="text-white lg:text-black h-[34px] w-[34px] active:opacity-60" />
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
                  <AiFillLinkedin className="text-white lg:text-black h-[34px] w-[34px] active:opacity-60" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
