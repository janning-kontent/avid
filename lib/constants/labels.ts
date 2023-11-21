import { PerCollection } from "../types/perCollection";

export const perCollectionSEOTitle = {
  sandbox: "AVID - Kontent.ai",
  elitebuild: "EliteBuild",
  support: "Knowledgebase",
  pdf: "PDF print",  
  default: "default"
  } as const satisfies PerCollection<string>;