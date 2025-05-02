import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
    apartmentId: v.optional(v.id("apartments")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("inquiries", args);
  },
});
