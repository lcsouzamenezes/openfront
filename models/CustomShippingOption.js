import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { integer, json, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const CustomShippingOption = list({
  access: {
    operation: denyAll,
  },
  fields: {
    price: integer({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    shippingOption: relationship({
      ref: "ShippingOption.customShippingOptions",
    }),
    cart: relationship({
      ref: "Cart.customShippingOptions",
    }),
    ...trackingFields,
  },
});
