import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ProductOption = list({
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
