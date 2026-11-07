import edbLogo from "./logos/edb.svg";
import microsoftLogo from "./logos/microsoft.svg";
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
  gold: [
    {
      name: "Microsoft",
      url: "https://aka.ms/pg-at-microsoft",
      logo: microsoftLogo,
    },
    {
      name: "EDB",
      description:
        "Data, governance, agents, and control on one sovereign system. EDB Postgres AI brings AI to where your data already lives, so you can run transactional, analytical, and agentic AI at scale. No ETL. No silos.",
      logo: edbLogo,
      url: "https://enterprisedb.com",
    },
  ],
  silver: [
    {
      name: "pganalyze",
      url: "https://pganalyze.com/",
      logo: pganalyzeLogo,
    },
  ],
  bronze: [],
};
