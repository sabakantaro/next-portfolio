import { Experience } from "../typings";

export const fetchExperience = async (): Promise<Experience[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getExperience`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
}