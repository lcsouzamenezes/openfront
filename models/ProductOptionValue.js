import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductOptionValue = list({
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
    productVariant: relationship({
      ref: "ProductVariant.productOptionValues",
    }),
    productOption: relationship({
      ref: "ProductOption.productOptionValues",
    }),
    ...trackingFields,
  },
});
