import { client } from "@/sanity/lib/client";
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

export function getHomePageData() {
  return client.fetch<HomePageData>(HOME_QUERY);
}

export function getStudioPageData() {
  return client.fetch<StudioPageData>(STUDIO_QUERY);
}

export function getServicesPageData() {
  return client.fetch<ServicesPageData>(SERVICES_QUERY);
}

export function getReferencesPageData() {
  return client.fetch<ReferencePageData>(REFERENCES_QUERY);
}
