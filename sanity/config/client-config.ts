import { apiVersion, dataset, projectId } from '@/sanity/env';

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

export default clientConfig;
