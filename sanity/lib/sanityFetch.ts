import 'server-only';

import { client } from '@/sanity/lib/client';

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({ query }: { query: string }): Promise<QueryResponse> {
  if (!token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
  }

  return client.fetch<QueryResponse>(query);
}
