'use client';

import '@/styles/css/additional-styles/utility-patterns.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import ErrorMessage from './utils/ErrorMessage';

import { type TEmailSchema, emailSchema } from '@/lib/types';

export default function ContactForm() {
  const searchParams = useSearchParams();

  const subject = searchParams.get('subject');
  const defaultMessage = subject ? `Objet : ${subject}` : '';
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
      phoneNumber: '',
      message: defaultMessage,
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
    } catch (error) {
      alert("Une erreur s'est produite");
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
            <ErrorMessage>{errors.firstname?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.lastname?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="email">
              Numero de téléphone <span className="text-rose-500">*</span>
            </label>
            <input
              {...register('phoneNumber', { required: true, pattern: /^(0\d{1}[1-9]{8}|(\d{2}\s?){4}\d{2})$/ })}
              id="phoneNumber"
              className="form-input w-full"
              type="tel"
              placeholder="0612345678"
            />
            <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300" htmlFor="message">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea {...register('message', { required: true })} id="message" className="form-input w-full" />
            <ErrorMessage>{errors.message?.message}</ErrorMessage>
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
              <option value="Bouche à oreille">Recherche Internet</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            disabled={isSubmitSuccessful}
            type="submit"
            className="btn group w-full bg-buttercup-500 text-sm text-white shadow-sm hover:bg-buttercup-600"
          >
            {isSubmitting ? 'Envoi en cours...' : isSubmitSuccessful ? 'Message bien envoyé !' : 'Envoyer'}
            <span className="ml-1 tracking-normal text-buttercup-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
              -&gt;
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
