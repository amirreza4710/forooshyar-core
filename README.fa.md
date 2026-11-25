# هسته فروشیار (Forooshyar Core)

[English](./README.md)

**Forooshyar Core** یک هسته متن‌باز و مستقل از دامنه برای **ارکستراسیون محدود چندایجنتی (Bounded Multi-Agent Orchestration)** است. این پروژه شامل قراردادهای سخت‌گیرانه TypeScript + Zod و موتور مناظره ۲ رانده سنا همراه با مدارقطع‌کن‌های ضدلوپ و اتمام سهمیه توکن است.

## پکیج‌ها

- **`@forooshyar/hydra-acp`**: اسکیماهای Zod، تایپ‌های TypeScript و انتخاب‌گر مدل شایسته‌محور (`selectHydraModels`) با قفل بازبینی میان‌خانواده‌ای.
- **`@forooshyar/hydra-senate`**: موتور مناظره سنا با سقف سخت ۲ راند (`HYDRA_MAX_DEBATE_ROUNDS = 2`)، یکتاسازی نیت‌ها برای جلوگیری از لوپ توکن‌سوزی و ارجاع خودکار در صورت اتمام سهمیه (`QUOTA_EXHAUSTED`).

## شروع سریع

```bash
pnpm install
pnpm typecheck
pnpm test
```

## مشارکت و امنیت

- [راهنمای مشارکت](./CONTRIBUTING.md)
- [آیین‌نامه رفتار](./CODE_OF_CONDUCT.md)
- [سیاست امنیتی](./SECURITY.md)
