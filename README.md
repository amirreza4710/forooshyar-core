# Forooshyar Core

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[فارسی (Persian)](./README.fa.md)

**Forooshyar Core** is an open-source, domain-agnostic foundation for **bounded multi-agent orchestration**. Extracted from the Forooshyar platform, it provides strict TypeScript + Zod contracts (`@forooshyar/hydra-acp`) and a deterministic 2-round Senate Debate Engine (`@forooshyar/hydra-senate`) with built-in anti-loop and token-quota circuit-breakers.

## Packages

- **`@forooshyar/hydra-acp`**: Zod schemas, TypeScript types, and merit-based model selection (`selectHydraModels`) with cross-family review locking.
- **`@forooshyar/hydra-senate`**: Bounded 2-round Senate Debate Engine (`HYDRA_MAX_DEBATE_ROUNDS = 2`), idempotent intent deduplication, and `QUOTA_EXHAUSTED` escalation.

## Quick Start

```bash
pnpm install
pnpm typecheck
pnpm test
```

## Example

```ts
import { runHydraSenate } from "@forooshyar/hydra-senate";

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
  "default-tenant",
);

console.log(result.receipt.outcome); // "APPROVED"
```

## Contributing & Security

- [Contributing Guide](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Security Policy](./SECURITY.md)
