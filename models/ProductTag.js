import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductTag = list({
  fields: {
    value: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    discountConditions: relationship({
      ref: "DiscountCondition.productTags",
      many: true,
    }),
    products: relationship({ ref: "Product.productTags", many: true }),
    ...trackingFields,
  },
});
