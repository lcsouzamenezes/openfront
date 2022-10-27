import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductType = list({
  fields: {
    value: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    discountConditions: relationship({
      ref: "DiscountCondition.productTypes",
      many: true,
    }),
    products: relationship({
      ref: "Product.productType",
      many: true,
    }),
    taxRates: relationship({
      ref: "TaxRate.productTypes",
      many: true,
    }),
    ...trackingFields
  },
});
