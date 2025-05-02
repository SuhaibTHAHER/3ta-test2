import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const applicationTables = {
  apartments: defineTable({
    number: v.string(),
    area: v.number(),
    price: v.number(),
    isAvailable: v.boolean(),
    finishing: v.union(
      v.literal("fully_finished"),
      v.literal("semi_finished"),
      v.literal("core_shell")
    ),
    view: v.string(),
    description: v.string(),
    floor: v.number(),
    images: v.array(v.id("_storage")),
    floorPlanImage: v.optional(v.id("_storage")),
  }).index("by_number", ["number"]),

  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
    apartmentId: v.optional(v.id("apartments")),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
