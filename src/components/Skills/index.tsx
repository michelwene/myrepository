import { HomeProps, SkillsType } from "@/pages";
import { api } from "@/services/api";
import Image from "next/image";

export default function Skills({ skills, studies, otherSkills }: HomeProps) {
  return (
    <div className="w-full h-auto py-10" id="skills">
      <div className="container mx-auto flex-1">
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="border-8 border-black px-20 py-5">
            <p className="font-montserrat font-bold text-3xl uppercase">
              Skills
            </p>
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 mx-auto my-10 font-montserrat font-bold text-[30px]">
          <h4>Utilizando atualmente:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills &&
              skills.map((skill) => (
                <div key={skill.id}>
                  <p className="font-montserrat font-bold text-[24px] text-center">
                    {skill.name}
                  </p>
                  <Image
                    alt={`imagem logo ${skill.name}`}
                    src={skill.image}
                    width={100}
                    height={100}
                    className="mx-auto object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 mx-auto my-10 font-montserrat font-bold text-[30px]">
          <h4>Estudando:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {studies &&
              studies.map((study) => (
                <div key={study.id}>
                  <p className="font-montserrat font-bold text-[24px] text-center">
                    {study.name}
                  </p>
                  <Image
                    alt={`imagem logo ${study.name}`}
                    src={study.image}
                    width={100}
                    height={100}
                    className="mx-auto object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="w-3/4 lg:w-1/2 mx-auto my-10 font-montserrat font-bold text-[30px]">
          <h4>Outras habilidades:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherSkills &&
              otherSkills.map((otherSkill) => (
                <div key={otherSkill.id}>
                  <p className="font-montserrat font-bold text-[24px] text-center">
                    {otherSkill.name}
                  </p>
                  <Image
                    alt={`imagem logo ${otherSkill.name}`}
                    src={otherSkill.image}
                    width={100}
                    height={100}
                    className="mx-auto object-contain"
                  />
                </div>
              ))}
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
