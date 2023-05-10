import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import { api } from "@/services/api";
import { GetStaticProps } from "next";

export type SkillsType = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type OtherSkills = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export type Repository = {
  id: number;
  name: string;
  description: string;
  repository_link: string;
  repository_demo_link: string;
  image: string;
};

export type Studies = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type HomeProps = {
  skills?: SkillsType[];
  repositories?: Repository[];
  studies?: Studies[];
  otherSkills?: OtherSkills[];
};

export default function Home(data: HomeProps) {
  return (
    <div className="bg-gradient-to-tl from-white to-gray-300 flex flex-col justify-between ">
      <NavBar />
      <Main />
      <AboutMe />

      <button className="fixed bottom-5 right-5 z-50">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=18998071096&text=Ol%C3%A1!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato%20para%20solicitar%20seus%20servi%C3%A7os%20de%20desenvolvimento%20e%20manuten%C3%A7%C3%A3o%20de%20software.%20Por%20favor,%20me%20informe%20como%20podemos%20conversar%20melhor%20sobre%20isso.%20Obrigado!"
        >
          <WhatsappIcon size={70} round />
        </a>
      </button>
      <Skills
        skills={data.skills}
        otherSkills={data.otherSkills}
        studies={data.studies}
      />
      <Portfolio repositories={data.repositories} />
      <Contact />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  skills: SkillsType[];
  repositories: Repository[];
  studies: Studies[];
  otherSkills: OtherSkills[];
}> = async () => {
  const response = await Promise.all([
    api.get("/api/skills"),
    api.get("/api/repositories"),
    api.get("/api/studies"),
    api.get("/api/other-skills"),
  ]);

  const skills = response[0].data.map((skill: SkillsType) => {
    return {
      id: skill.id,
      name: skill.name,
      image: skill.image,
      description: skill.description,
    };
  });
  const repositories = response[1].data.map((repository: Repository) => {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description,
      repository_link: repository.repository_link,
      repository_demo_link: repository.repository_demo_link,
      image: repository.image,
    };
  });

  const studies = response[2].data.map((study: Studies) => {
    return {
      id: study.id,
      name: study.name,
      description: study.description,
      image: study.image,
    };
  });

  const otherSkills = response[3].data.map((otherSkill: OtherSkills) => {
    return {
      id: otherSkill.id,
      name: otherSkill.name,
      image: otherSkill.image,
      description: otherSkill.description,
    };
  });

  return {
    props: {
      skills: skills,
      repositories: repositories,
      studies: studies,
      otherSkills: otherSkills,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
