export type NetworkSite = {
  name: string;
  url: string;
  role: string;
  description: string;
  anchorText: string;
  category: "country" | "thematic" | "sister";
};

export const networkSites: NetworkSite[] = [
  {
    name: "Somalia Expert",
    url: "https://www.somaliaexpert.com",
    role: "Country witness site",
    description:
      "Clan analysis, Al-Shabaab risk, MOJ Country Guidance framework, FGM, and Mogadishu return viability — specialist Somalia expert witnesses for asylum appeals.",
    anchorText: "Somalia expert witnesses for immigration tribunals",
    category: "country",
  },
  {
    name: "Nigeria Expert",
    url: "https://www.nigeriaexpert.com",
    role: "Country witness site",
    description:
      "LGBTQ, IPOB, FGM, trafficking, and Boko Haram risk profiles — Nigeria expert witnesses with SOGIESC CPIN challenge capability following June 2025 updates.",
    anchorText: "Nigeria expert witnesses for asylum and deportation cases",
    category: "country",
  },
  {
    name: "Pakistan Country Expert",
    url: "https://www.pakistancountryexpert.com",
    role: "Country witness site",
    description:
      "Ahmadi, blasphemy, honour killing, and FGM risk analysis — Pakistan country expert witnesses for immigration tribunal proceedings.",
    anchorText: "Pakistan country expert witnesses for tribunals",
    category: "country",
  },
  {
    name: "Africa Expert Witness",
    url: "https://www.africaexpertwitness.com",
    role: "Country witness site",
    description:
      "African country and regional expert witnesses covering multiple jurisdictions — routing to appropriate country-specific expertise across the continent.",
    anchorText: "Africa expert witnesses for immigration appeals",
    category: "country",
  },
  {
    name: "Albania Expert Witness",
    url: "https://www.albaniaexpertwitness.com",
    role: "Country witness site",
    description:
      "Blood feuds, trafficking, LGBT, and Kanun customary law — Albania expert witnesses for asylum and human rights proceedings.",
    anchorText: "Albania expert witnesses for immigration tribunals",
    category: "country",
  },
  {
    name: "South Asia Expert",
    url: "https://www.southasiaexpert.com",
    role: "Country witness site",
    description:
      "India, Sri Lanka, Bangladesh, Nepal, and caste-related risk analysis — South Asia expert witnesses for tribunal proceedings.",
    anchorText: "South Asia expert witnesses for asylum appeals",
    category: "country",
  },
  {
    name: "Afghanistan Country Expert",
    url: "https://www.afghanistancountryexpert.com",
    role: "Country witness site",
    description:
      "Taliban-era risk, Hazara ethnicity, women's rights, and DD Country Guidance framework — Afghanistan expert witnesses for appeals.",
    anchorText: "Afghanistan country expert witnesses for tribunals",
    category: "country",
  },
  {
    name: "Persecution Expert",
    url: "https://www.persecutionexpert.com",
    role: "Thematic witness site",
    description:
      "Refugee Convention grounds, HJ/RT standards, particular social group analysis, and persecution methodology — thematic persecution expert witnesses.",
    anchorText: "Persecution expert witnesses for asylum appeals",
    category: "thematic",
  },
  {
    name: "Human Rights Experts",
    url: "https://www.humanrightsexperts.com",
    role: "Thematic witness site",
    description:
      "ECHR Article 3, ICCPR, CAT, CEDAW standards — human rights expert witnesses for deportation, removal, and humanitarian protection cases.",
    anchorText: "Human rights expert witnesses for immigration tribunals",
    category: "thematic",
  },
  {
    name: "Immigration Expert Reports",
    url: "https://www.immigrationexpertreports.com",
    role: "Sister hub",
    description:
      "Report standards, report types, CPIN framework, Practice Direction 2024 compliance, and Adam Pipe 2025 report structure — the complementary reports master hub.",
    anchorText: "Immigration expert report standards and report types",
    category: "sister",
  },
];
