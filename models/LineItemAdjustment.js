import { list } from "@keystone-6/core";
import { integer, json, relationship, text } from "@keystone-6/core/fields";
// import { document } from "@keystone-6/fields-document";
import { trackingFields } from "./trackingFields";

export const LineItemAdjustment = list({
  fields: {
    description: text({
      validation: {
        isRequired: true,
      },
    }),
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    discount: relationship({
      ref: "Discount.lineItemAdjustments",
    }),
    lineItem: relationship({
      ref: "LineItem.lineItemAdjustments",
    }),
    ...trackingFields,
  },
});
