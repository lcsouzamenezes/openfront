import { list } from "@keystone-6/core";
import { integer, json, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const CustomShippingOption = list({
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
