/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import { schema } from "./sanity/schema";
import { homePage } from "./sanity/schemas/singletons/homePage";
import { referencePage } from "./sanity/schemas/singletons/referencePage";
import { servicesPage } from "./sanity/schemas/singletons/servicesPage";
import { studioPage } from "./sanity/schemas/singletons/studioPage";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: pageStructure([
        homePage,
        referencePage,
        servicesPage,
        studioPage,
      ]),
    }),
    singletonPlugin([
      homePage.name,
      referencePage.name,
      servicesPage.name,
      studioPage.name,
    ]),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
