import { useState } from "react";
import { EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { HomeProps } from "@/pages";
import Image from "next/image";

export default function Portfolio({ repositories }: HomeProps) {
  const [isLastIndex, setIsLastIndex] = useState(false);
  const [isFirstIndex, setIsFirstIndex] = useState(true);

  return (
    <>
      <div
        className="w-full h-auto py-10 bg-[url('/assets/paisagem_repo.jpg')] bg-cover bg-center bg-no-repeat "
        id="portfolio"
      >
        <div className="container mx-auto flex-1">
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="border-8 border-black px-8 lg:px-14 py-5">
              <p className="font-montserrat font-bold text-3xl uppercase ">
                Portifólio
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-black"></div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            shadow: true,
            translate: ["100%", 0, 0],
          },
          perspective: true,
        }}
        modules={[EffectCreative]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0)",
        }}
        onActiveIndexChange={(swiper) => {
          setIsLastIndex(swiper.isEnd);
          setIsFirstIndex(swiper.isBeginning);
        }}
      >
        {repositories &&
          repositories.map((repositorie) => {
            return (
              <>
                <SwiperSlide key={repositorie.id}>
                  <div
                    className={`relative flex mx-auto max-w-[450px] min-h-[400px] transition-all `}
                  >
                    <Image
                      alt="Repositorio"
                      src={repositorie.image}
                      fill
                      className="absolute z-10 w-full h-full object-cover brightness-[0.2] rounded-md"
                    />
                    <div className="relative z-20 flex self-center w-full h-full flex-col justify-center items-center">
                      <p className="font-montserrat font-semibold  text-[10px] italic text-white">
                        Projeto pessoal
                      </p>
                      <p className="font-montserrat font-bold  text-[25px] text-white">
                        {repositorie.name}
                      </p>
                      <p className="font-montserrat font-medium  text-[10px] text-white text-justify px-2">
                        {repositorie.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <a
                          href={repositorie.repository_demo_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="text-white text-xs uppercase active:opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75 flex items-center justify-center flex-1 border-x-4 border-white max-w-[200px] w-full mx-auto py-2 px-2 font-montserrat font-semibold">
                            Demo
                          </button>
                        </a>
                        <a
                          href={repositorie.repository_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="text-white text-xs uppercase active:opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75 flex items-center justify-center flex-1 border-x-4 border-white max-w-[200px] w-full mx-auto py-2 px-2 font-montserrat font-semibold">
                            Mais
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        <div className="flex justify-center align-middle gap-4 py-4">
          {!isFirstIndex && (
            <RxDoubleArrowLeft className="text-2xl  animate-ping text-white" />
          )}
          {repositories && repositories.length > 1 && (
            <p className="text-white text-center font-semibold">
              Arraste para o lado
            </p>
          )}
          {!isLastIndex && repositories && repositories?.length > 1 && (
            <RxDoubleArrowRight className="text-2xl  animate-ping text-white" />
          )}
        </div>
      </Swiper>
    </>
  );
}
