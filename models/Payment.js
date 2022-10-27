import { list } from "@keystone-6/core";
import {
  integer,
  json,
  text,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Payment = list({
  fields: {
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    currencyCode: text({
      validation: {
        isRequired: true,
      },
    }),
    amountRefunded: integer({
      defaultValue: 0,
      validation: {
        isRequired: true,
      },
    }),
    paymentProvider: text({
      validation: {
        isRequired: true,
      },
    }),
    data: json(),
    capturedAt: timestamp(),
    canceledAt: timestamp(),
    metadata: json(),
    idempotencyKey: text(),
    cart: relationship({
      ref: "Cart.payment",
    }),
    swap: relationship({
      ref: "Swap.payment",
    }),
    currency: relationship({
      ref: "Currency.payments",
    }),
    order: relationship({
      ref: "Order.payments",
    }),
    ...trackingFields,
  },
});
