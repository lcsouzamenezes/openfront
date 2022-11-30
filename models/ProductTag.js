import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductTag = list({
  access: {
    operation: denyAll,
  },
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
