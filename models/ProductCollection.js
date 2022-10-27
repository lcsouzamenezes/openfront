import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductCollection = list({
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    handle: text(),
    metadata: json(),
    discountConditions: relationship({
      ref: "DiscountCondition.productCollections",
      many: true,
    }),
    products: relationship({
      ref: "Product.productCollection",
      many: true,
    }),
    ...trackingFields,
  },
});
