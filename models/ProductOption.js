import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductOption = list({
  access: {
    operation: denyAll,
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    product: relationship({
      ref: "Product.productOptions",
    }),
    productOptionValues: relationship({
      ref: "ProductOptionValue.productOption",
      many: true,
    }),
    ...trackingFields
  },
});
