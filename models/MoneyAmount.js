import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { integer, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const MoneyAmount = list({
  access: {
    operation: denyAll,
  },
  fields: {
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    minQuantity: integer(),
    maxQuantity: integer(),
    productVariant: relationship({
      ref: "ProductVariant.moneyAmounts",
    }),
    region: relationship({
      ref: "Region.moneyAmounts",
    }),
    currency: relationship({
      ref: "Currency.moneyAmounts",
    }),
    priceList: relationship({
      ref: "PriceList.moneyAmounts",
    }),
    ...trackingFields
  },
});
