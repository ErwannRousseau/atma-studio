import { client } from "@/sanity/lib/client";
import * as queryStore from "@sanity/react-loader";
import type { HomePageData } from "../types/HomePage";
import type { ReferencePageData } from "../types/ReferencesPage";
import type { ServicesPageData } from "../types/ServicesPage";
import type { StudioPageData } from "../types/StudioPage";
import {
  HOME_QUERY,
  REFERENCES_QUERY,
  SERVICES_QUERY,
  STUDIO_QUERY,
} from "./queries";

queryStore.setServerClient(client);

const { loadQuery } = queryStore;

export function getHomePageData() {
  return loadQuery<HomePageData>(HOME_QUERY);
}

export function getStudioPageData() {
  return loadQuery<StudioPageData>(STUDIO_QUERY);
}

export function getServicesPageData() {
  return loadQuery<ServicesPageData>(SERVICES_QUERY);
}

export function getReferencesPageData() {
  return loadQuery<ReferencePageData>(REFERENCES_QUERY);
}
