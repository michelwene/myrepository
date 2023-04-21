import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHelperMessage } from "../FormHelperMessage";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-z.]+\.(com|br|com\.br)$/,
      "E-mail inválido"
    ),
  phone: yup.string().required("Telefone é obrigatório"),
  message: yup
    .string()
    .required("Mensagem é obrigatório")
    .min(10, "Mensagem deve conter no mínimo 10 caracteres")
    .max(500, "Mensagem deve conter no máximo 500 caracteres"),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    try {
      setIsLoading(true);
      await api.post("api/contact", {
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phone,
      });
      toast.success("Mensagem enviada com sucesso!", {
        autoClose: 5000,
      });
      reset();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.response.data.message, {
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="w-full h-auto py-10" id="contact">
      <div className="container mx-auto flex-1">
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="border-8 border-black px-14 py-5">
            <p className="font-montserrat font-bold text-3xl uppercase">
              Contato
            </p>
          </div>
          <p className="font-sant font-normal text-[15px] w-3/4 lg:w-1/2 mt-8 text-center">
            Fique à vontade para entrar em contato comigo através do formulário
            abaixo ou enviando um e-mail diretamente para{" "}
            <a
              href="mailto:michelwene@hotmail.com"
              className="text-blue-400 hover:text-blue-600 hover:underline transition-all"
              target="_blank"
            >
              michelwene@hotmail.com
            </a>
            . Estou aberto a oportunidades de negócios e colaborações e
            retornarei sua mensagem assim que possível. Obrigado!
          </p>
          <div className="my-10">
            <Image
              src={"/assets/separator_black.png"}
              alt="Logo empresa M&W"
              width={200}
              height={100}
              className="mx-auto object-contain"
            />
          </div>
          <form
            className="w-full max-w-sm px-4 lg:px-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="name"
                  className={`border-l-4 border-b-4 ${
                    errors.name ? "border-red-500" : "border-black"
                  } outline-none px-4 pb-1 bg-transparent placeholder:font-bold placeholder:text-[14px]`}
                  placeholder="Digite seu nome"
                  autoComplete="off"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <FormHelperMessage message={errors.name.message + ""} />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="email"
                  className={`border-l-4 border-b-4 ${
                    errors.email ? "border-red-500" : "border-black "
                  } outline-none px-4 pb-1 bg-transparent placeholder:font-bold placeholder:text-[14px]`}
                  placeholder="Digite seu e-mail"
                  autoComplete="off"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <FormHelperMessage message={errors.email.message + ""} />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="phone"
                  className={`border-l-4 border-b-4 ${
                    errors.phone ? "border-red-500" : "border-black"
                  } outline-none px-4 pb-1 bg-transparent placeholder:font-bold placeholder:text-[14px]`}
                  placeholder="Digite seu telefone"
                  autoComplete="off"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <FormHelperMessage message={errors.phone.message + ""} />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  className={`border-l-4 border-b-4 ${
                    errors.message ? "border-red-500" : "border-black"
                  } outline-none px-4 bg-transparent placeholder:font-bold placeholder:text-[14px]`}
                  placeholder="Digite sua mensagem"
                  autoComplete="off"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <FormHelperMessage message={errors.message.message + ""} />
                )}
              </div>
              <button
                className="uppercase active:opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-75 flex items-center justify-center flex-1 border-x-4 border-black max-w-[200px] w-full mx-auto py-2 px-2 font-montserrat font-bold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
