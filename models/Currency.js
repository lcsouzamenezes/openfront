import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Currency = list({
  access: {
    operation: denyAll,
  },
  fields: {
    code: text({
      validation: {
        isRequired: true,
      },
    }),
    symbol: text({
      validation: {
        isRequired: true,
      },
    }),
    symbolNative: text({
      validation: {
        isRequired: true,
      },
    }),
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    moneyAmounts: relationship({
      ref: "MoneyAmount.currency",
      many: true,
    }),
    orders: relationship({
      ref: "Order.currency",
      many: true,
    }),
    payments: relationship({
      ref: "Payment.currency",
      many: true,
    }),
    regions: relationship({
      ref: "Region.currency",
      many: true,
    }),
    stores: relationship({
      ref: "Store.currency",
      many: true,
    }),
    ...trackingFields,
    // stores: relationship({
    //   ref: "Store.currencies",
    //   many: true,
    // }),
  },
});
