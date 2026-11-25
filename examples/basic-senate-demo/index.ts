import { runHydraSenate } from "../../packages/hydra-senate/src/index";

const result = runHydraSenate(
  {
    intentId: "11111111-1111-4111-8111-111111111111",
    action: "APPROVE_DISCOUNT",
    domain: "sales",
    riskLevel: "LOW",
    requiresHumanApproval: false,
    rationale: "Standard seasonal promotion",
    parameters: { discountPercent: 5 },
  },
  "demo-tenant",
);

console.log(JSON.stringify(result, null, 2));
