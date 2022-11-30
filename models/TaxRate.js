import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  json,
  float,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const TaxRate = list({
  access: {
    operation: denyAll,
  },
  fields: {
    rate: float(),
    code: text(),
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    products: relationship({
      ref: "Product.taxRates",
      many: true,
    }),
    productTypes: relationship({
      ref: "ProductType.taxRates",
      many: true,
    }),
    region: relationship({
      ref: "Region.taxRates",
    }),
    shippingOptions: relationship({
      ref: "ShippingOption.taxRates",
      many: true,
    }),
    ...trackingFields
  },
});
