import { list } from "@keystone-6/core";
import {
  checkbox,
  integer,
  float,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const GiftCardTransaction = list({
  fields: {
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    isTaxable: checkbox(),
    taxRate: float(),
    giftCard: relationship({
      ref: "GiftCard.giftCardTransactions",
    }),
    order: relationship({
      ref: "Order.giftCardTransactions",
    }),
    ...trackingFields,
  },
});
