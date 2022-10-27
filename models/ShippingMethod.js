import { list } from "@keystone-6/core";
import {
  json,
  integer,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ShippingMethod = list({
  fields: {
    price: integer({
      validation: {
        isRequired: true,
      },
    }),
    data: json(),
    return: relationship({
      ref: "Return.shippingMethod",
    }),
    order: relationship({
      ref: "Order.shippingMethods",
    }),
    claimOrder: relationship({
      ref: "ClaimOrder.shippingMethods",
    }),
    cart: relationship({
      ref: "Cart.shippingMethods",
    }),
    swap: relationship({
      ref: "Swap.shippingMethods",
    }),
    shippingOption: relationship({
      ref: "ShippingOption.shippingMethods",
    }),
    shippingMethodTaxLines: relationship({
      ref: "ShippingMethodTaxLine.shippingMethod",
      many: true,
    }),
    ...trackingFields
  },
});
