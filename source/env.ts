import { defineEnvVars } from "@sveltejs/kit/env";
import * as v from "valibot";

export const variables = defineEnvVars({
  CLOUDFLARE_TOKEN: {
    public: true,
    schema: v.optional(v.string()),
    static: true,
  },
});
