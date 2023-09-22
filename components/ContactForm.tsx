/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import '@/styles/css/additional-styles/utility-patterns.css';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

// import { action } from '@/lib/action';
import { type TEmailSchema, emailSchema } from '@/lib/types';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<TEmailSchema>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      sourceOfDiscovery: '',
    },
    resolver: zodResolver(emailSchema),
  });
  const onSubmit: SubmitHandler<TEmailSchema> = async (data) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        reset();
      }
      console.log(response);
    } catch (error) {
      // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur.
      console.error("Une erreur s'est produite :", error);
    }
  };
  return (
    <div data-aos="fade-right" data-aos-delay="200" className="w-full max-w-sm">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="firstname">
              Prénom <span className="text-rose-500">*</span>
            </label>
            <input
              {...register('firstname', { required: true })}
              id="firstname"
              className="form-input w-full"
              type="text"
              placeholder="Pierre"
            />
            {errors.firstname?.message && (
              <span className="text-sm text-buttercup-400/80">{errors.firstname?.message}</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="lastname">
              Nom <span className="text-rose-500">*</span>
            </label>
            <input
              {...register('lastname', { required: true })}
              id="lastname"
              className="form-input w-full"
              type="text"
              placeholder="Dupont"
            />
            {errors.lastname?.message && (
              <span className="text-sm text-buttercup-400/80">{errors.lastname?.message}</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="email">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              id="email"
              className="form-input w-full"
              type="email"
              placeholder="pierre.d@example.com"
            />
            {errors.email?.message && <span className="text-sm text-buttercup-400/80">{errors.email?.message}</span>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="message">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea {...register('message', { required: true })} id="message" className="form-input w-full" />
            {errors.message?.message && (
              <span className="text-sm text-buttercup-400/80">{errors.message?.message}</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="sourceOfDiscovery">
              Comment as-tu entendu parlé de nous ?
            </label>
            <select
              {...register('sourceOfDiscovery')}
              id="sourceOfDiscovery"
              className="form-select w-full py-2 text-sm"
            >
              <option value={undefined}>Sélectionner une option</option>
              <option value="Instagram">Instagram</option>
              <option value="Bouche à oreille">Bouche à oreille</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            disabled={isSubmitSuccessful}
            type="submit"
            className="btn group w-full bg-buttercup-500 text-sm text-white shadow-sm hover:bg-buttercup-600"
          >
            {isSubmitting ? 'Envoi en cours...' : isSubmitSuccessful ? 'Bien envoyé !' : 'Envoyer'}
            <span className="ml-1 tracking-normal text-buttercup-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
              -&gt;
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
