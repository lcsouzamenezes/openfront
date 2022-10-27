import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Store = list({
  fields: {
    name: text({
      defaultValue: "Openfront Store",
      validation: {
        isRequired: true,
      },
    }),
    defaultCurrencyCode: text({
      defaultValue: "usd",
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    swapLinkTemplate: text(),
    paymentLinkTemplate: text(),
    inviteLinkTemplate: text(),
    currency: relationship({
      ref: "Currency.stores",
    }),
    // currencies: relationship({
    //   ref: "Currency.stores",
    //   many: true,
    // }),
    ...trackingFields,
  },
});
