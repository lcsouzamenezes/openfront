import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
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
  access: {
    operation: denyAll,
  },
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
