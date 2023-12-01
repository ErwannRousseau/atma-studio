import { z } from 'zod';

export const emailSchema = z.object({
  firstname: z.string().min(1, { message: 'Un prénom est requis' }).max(100),
  lastname: z.string().min(1, { message: 'Un nom est requis' }).max(100),
  email: z.string().email({ message: 'Un email est requis' }),
  phoneNumber: z.string().min(10, { message: 'Un numéro de téléphone est requis' }),
  message: z.string().min(5, { message: 'Le message doit etre pertinent' }),
  sourceOfDiscovery: z.string().transform((sourceOfDiscovery) => {
    if (sourceOfDiscovery === '') return null;
    return sourceOfDiscovery;
  }),
});

export type TEmailSchema = z.infer<typeof emailSchema>;
