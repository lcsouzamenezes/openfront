import { list } from "@keystone-6/core";
import {
  json,
  select,
  text,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";

import { trackingFields } from "./trackingFields";

export const Cart = list({
  fields: {
    email: text(),
    type: select({
      type: "enum",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Swap",
          value: "swap",
        },
        {
          label: "Draft Order",
          value: "draft_order",
        },
        {
          label: "Payment Link",
          value: "payment_link",
        },
        {
          label: "Claim",
          value: "claim",
        },
      ],
      defaultValue: "default",
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    idempotencyKey: text(),
    context: json(),
    paymentAuthorizedAt: timestamp(),
    customer: relationship({
      ref: "Customer.carts",
      many: false,
    }),
    region: relationship({
      ref: "Region.carts",
    }),
    addresses: relationship({
      ref: "Address.cart",
      many: true,
    }),
    discounts: relationship({
      ref: "Discount.carts",
      many: true,
    }),
    giftCards: relationship({
      ref: "GiftCard.carts",
      many: true,
    }),
    draftOrder: relationship({
      ref: "DraftOrder.cart",
    }),
    order: relationship({
      ref: "Order.cart",
    }),
    lineItems: relationship({
      ref: "LineItem.cart",
      many: true,
    }),
    customShippingOptions: relationship({
      ref: "CustomShippingOption.cart",
      many: true,
    }),
    swap: relationship({
      ref: "Swap.cart",
    }),
    shippingMethods: relationship({
      ref: "ShippingMethod.cart",
      many: true,
    }),
    payment: relationship({
      ref: "Payment.cart",
    }),
    paymentSessions: relationship({
      ref: "PaymentSession.cart",
      many: true,
    }),
    ...trackingFields,
  },
});
