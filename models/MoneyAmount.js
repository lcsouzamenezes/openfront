import { list } from "@keystone-6/core";
import { integer, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const MoneyAmount = list({
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
