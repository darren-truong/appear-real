"use server";

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

import { convertToPlainObject } from "@/lib/utils";
import { prisma } from "../../db/prisma";

// Get lastest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get single product by its slug
export async function getProductbySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
}
