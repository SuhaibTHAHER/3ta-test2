import { v } from "convex/values";
import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const apartments = await ctx.db.query("apartments").collect();
    return Promise.all(
      apartments.map(async (apartment) => ({
        ...apartment,
        imageUrls: await Promise.all(
          apartment.images.map((imageId) => ctx.storage.getUrl(imageId))
        ),
        floorPlanUrl: apartment.floorPlanImage
          ? await ctx.storage.getUrl(apartment.floorPlanImage)
          : null,
      }))
    );
  },
});

export const get = query({
  args: { id: v.id("apartments") },
  handler: async (ctx, args) => {
    const apartment = await ctx.db.get(args.id);
    if (!apartment) return null;

    return {
      ...apartment,
      imageUrls: await Promise.all(
        apartment.images.map((imageId) => ctx.storage.getUrl(imageId))
      ),
      floorPlanUrl: apartment.floorPlanImage
        ? await ctx.storage.getUrl(apartment.floorPlanImage)
        : null,
    };
  },
});

export const getByNumber = query({
  args: { number: v.string() },
  handler: async (ctx, args) => {
    const apartment = await ctx.db
      .query("apartments")
      .withIndex("by_number", (q) => q.eq("number", args.number))
      .unique();
    
    if (!apartment) return null;

    return {
      ...apartment,
      imageUrls: await Promise.all(
        apartment.images.map((imageId) => ctx.storage.getUrl(imageId))
      ),
      floorPlanUrl: apartment.floorPlanImage
        ? await ctx.storage.getUrl(apartment.floorPlanImage)
        : null,
    };
  },
});
