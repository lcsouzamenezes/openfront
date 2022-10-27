import { list } from "@keystone-6/core";
import {
  checkbox,
  integer,
  json,
  text,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Discount = list({
  fields: {
    code: text({
      validation: {
        isRequired: true,
      },
    }),
    isDynamic: checkbox(),
    isDisabled: checkbox(),
    startsAt: timestamp({
      defaultValue: { kind: "now" },
      validation: {
        isRequired: true,
      },
    }),
    endsAt: timestamp({
      validation: {
        isRequired: false,
      },
    }),
    metadata: json(),
    usageLimit: integer(),
    usageCount: integer({
      defaultValue: 0,
      validation: {
        isRequired: true,
      },
    }),
    validDuration: text(),
    discountRule: relationship({
      ref: "DiscountRule.discounts",
    }),
    carts: relationship({
      ref: "Cart.discounts",
      many: true,
    }),
    regions: relationship({
      ref: "Region.discounts",
      many: true,
    }),
    lineItemAdjustments: relationship({
      ref: "LineItemAdjustment.discount",
      many: true,
    }),
    regions: relationship({
      ref: "Region.discounts",
      many: true,
    }),
    orders: relationship({
      ref: "Order.discounts",
      many: true,
    }),
    ...trackingFields,
  },
});
