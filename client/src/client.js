import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-11-21",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const fetchProjects = async (lenguage) => {
  const projects = await client.fetch(
    `*[_type == "project" && lenguage=="${lenguage}"]`
  );

  return projects;
};
