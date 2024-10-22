import articlePrismaOnboarding from "./PrismaOnboarding";
import articlePrismaFAQ from "./PrismaFAQ";
import articleVTBInHouse from "./VTBInHouse";
import articleVTBResearch from "./VTBResearch";
import articleVTBStart from "./VTBStart";
import articleLmSubscription from "./LmSubscription";
import articleLmVerification from "./LmVerification";
import articleLmAuthentication from "./LmAuthentication";
import articleLmProfiles from "./LmProfiles";
import articleLmCastings from "./LmCastings";

const articles = {
  "pl-onboarding": articlePrismaOnboarding,
  "pl-faq": articlePrismaFAQ,
  "vtb-inhouse": articleVTBInHouse,
  "vtb-research": articleVTBResearch,
  "vtb-start": articleVTBStart,
  "lm-subscription": articleLmSubscription,
  "lm-verification": articleLmVerification,
  "lm-auth": articleLmAuthentication,
  "lm-profiles": articleLmProfiles,
  "lm-castings": articleLmCastings,
};

export default articles;
