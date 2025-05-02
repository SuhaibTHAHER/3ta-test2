import { query } from "./_generated/server";
import { v } from "convex/values";

export const getByEmail = query({
  args: { email: v.string() },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .withIndex("email", (q) => q.eq("email", args.email))
      .unique();
    return user;
  },
});

export const get = query({
  args: { userId: v.id("users") },
  async handler(ctx, args) {
    return await ctx.db.get(args.userId);
  },
});
