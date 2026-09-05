import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getBlogPosts: async function () {
    try {
      const response = await fetch(`${API_URL}/posts`, {next: { revalidate: 60 }});
      const data = await response.json();
      // console.log(data)
      return { data: data, error : null };
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return { data: null, error: error };
    }
  },
};
