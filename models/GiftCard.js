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

export const GiftCard = list({
  fields: {
    code: text({
      validation: {
        isRequired: true,
      },
    }),
    value: integer({
      validation: {
        isRequired: true,
      },
    }),
    balance: integer({
      validation: {
        isRequired: true,
      },
    }),
    isDisabled: checkbox(),
    endsAt: timestamp(),
    metadata: json(),
    region: relationship({
      ref: "region",
    }),
    order: relationship({
      ref: "Order.giftCards",
    }),
    carts: relationship({
      ref: "Cart.giftCards",
      many: true,
    }),
    giftCardTransactions: relationship({
      ref: "GiftCardTransaction.giftCard",
      many: true,
    }),
    region: relationship({
      ref: "Region.giftCards",
    }),
    ...trackingFields,
  },
});
