"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ErrorMessage from "@/components/utils/ErrorMessage";
import { confettiFireworks } from "@/lib/confetti";
import { type TEmailSchema, emailSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendGTMEvent } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const defaultMessage = subject ? `Objet : ${subject}` : "";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<TEmailSchema>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      message: defaultMessage,
      sourceOfDiscovery: "",
    },
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<TEmailSchema> = async (data) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        sendGTMEvent({
          event: "form_submission",
          formType: "contact",
          formSource: subject || "direct",
          sourceOfDiscovery: data.sourceOfDiscovery || "not specified",
        });

        confettiFireworks();
        reset();
      }
    } catch (_error) {
      alert("Une erreur s'est produite");
    }
  };

  return (
    <div data-aos="fade-right" data-aos-delay="200" className="w-full max-w-sm">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="firstname"
          >
            Prénom <span className="text-rose-500">*</span>
          </label>
          <Input
            {...register("firstname", { required: true })}
            id="firstname"
            type="text"
            placeholder="Pierre"
          />
          <ErrorMessage>{errors.firstname?.message}</ErrorMessage>
        </div>
        <div className="space-y-1">
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="lastname"
          >
            Nom <span className="text-rose-500">*</span>
          </label>
          <Input
            {...register("lastname", { required: true })}
            id="lastname"
            type="text"
            placeholder="Dupont"
          />
          <ErrorMessage>{errors.lastname?.message}</ErrorMessage>
        </div>
        <div className="space-y-1">
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="email"
          >
            Email <span className="text-rose-500">*</span>
          </label>
          <Input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
            type="email"
            placeholder="pierre.d@example.com"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div className="space-y-1">
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="email"
          >
            Numero de téléphone <span className="text-rose-500">*</span>
          </label>
          <Input
            {...register("phoneNumber", {
              required: true,
              pattern: /^(0\d{1}[1-9]{8}|(\d{2}\s?){4}\d{2})$/,
            })}
            id="phoneNumber"
            type="tel"
            placeholder="0612345678"
          />
          <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        </div>
        <div className="space-y-1">
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="message"
          >
            Message <span className="text-rose-500">*</span>
          </label>
          <Textarea {...register("message", { required: true })} id="message" />
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
        </div>
        <div>
          <label
            className="block font-medium text-slate-300 text-sm"
            htmlFor="sourceOfDiscovery"
          >
            Comment as-tu entendu parlé de nous ?
          </label>
          <select
            {...register("sourceOfDiscovery")}
            id="sourceOfDiscovery"
            className="flex h-10 w-full rounded-md border-transparent bg-slate-800 px-3 py-1.5 text-base text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value={undefined}>Sélectionner une option</option>
            <option value="Instagram">Instagram</option>
            <option value="Bouche à oreille">Bouche à oreille</option>
            <option value="Bouche à oreille">Recherche Internet</option>
          </select>
        </div>
        <Button
          disabled={isSubmitSuccessful}
          type="submit"
          className="group w-full"
        >
          {isSubmitting
            ? "Envoi en cours..."
            : isSubmitSuccessful
              ? "Message bien envoyé !"
              : "Envoyer"}
          <span className="ml-1 text-buttercup-200 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
            -&gt;
          </span>
        </Button>
      </form>
    </div>
  );
}
