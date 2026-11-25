import { describe, it, expect } from "vitest";
import { HYDRA_MAX_DEBATE_ROUNDS } from "@forooshyar/hydra-acp";
import { runHydraSenate } from "./senate-engine";

describe("@forooshyar/hydra-senate", () => {
  it("approves LOW risk intent in 1 round", () => {
    const res = runHydraSenate(
      {
        intentId: "11111111-1111-4111-8111-111111111111",
        action: "CHECK_STOCK",
        domain: "inventory",
        riskLevel: "LOW",
        requiresHumanApproval: false,
        rationale: "Routine check",
        parameters: {},
      },
      "tenant-1",
    );
    expect(res.receipt.outcome).toBe("APPROVED");
    expect(res.receipt.roundsCompleted).toBe(1);
  });

  it("enforces 2-round cap and escalates CRITICAL intents", () => {
    const res = runHydraSenate(
      {
        intentId: "22222222-2222-4222-8222-222222222222",
        action: "OVERRIDE_CREDIT",
        domain: "finance",
        riskLevel: "CRITICAL",
        requiresHumanApproval: true,
        rationale: "High value override",
        parameters: {},
      },
      "tenant-1",
    );
    expect(res.receipt.outcome).toBe("ESCALATED");
    expect(res.receipt.roundsCompleted).toBe(HYDRA_MAX_DEBATE_ROUNDS);
  });

  it("deduplicates repeated intentId to prevent token-burning loops", () => {
    const intent = {
      intentId: "33333333-3333-4333-8333-333333333333",
      action: "CHECK_STOCK",
      domain: "inventory",
      riskLevel: "LOW" as const,
      requiresHumanApproval: false,
      rationale: "Retry test",
      parameters: {},
    };
    const first = runHydraSenate(intent, "tenant-1");
    const second = runHydraSenate(intent, "tenant-1");
    expect(second.cached).toBe(true);
    expect(second.receipt.receiptId).toBe(first.receipt.receiptId);
  });

  it("immediately escalates with 0 rounds when quotaExhausted is true", () => {
    const res = runHydraSenate(
      {
        intentId: "44444444-4444-4444-8444-444444444444",
        action: "CHECK_STOCK",
        domain: "inventory",
        riskLevel: "LOW",
        requiresHumanApproval: false,
        rationale: "Quota test",
        parameters: {},
      },
      "tenant-1",
      { quotaExhausted: true },
    );
    expect(res.receipt.outcome).toBe("ESCALATED");
    expect(res.receipt.roundsCompleted).toBe(0);
  });
});
