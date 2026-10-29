import pganalyzeLogo from "./logos/pganalyze.svg";

export type Sponsor = {
  name: string;
  url: string;
  logo: string;
  description?: string;
};

export type SponsorList = Record<"gold" | "silver" | "bronze", Sponsor[]>;

// Add confirmed sponsors here; both the home and sponsor pages use this list.
// Import logo files from ./logos/ so their URLs also work under a base path.
export const SPONSORS: SponsorList = {
  gold: [],
  silver: [
    {
      name: "pganalyze",
      url: "https://pganalyze.com/",
      logo: pganalyzeLogo,
    },
  ],
  bronze: [],
};
