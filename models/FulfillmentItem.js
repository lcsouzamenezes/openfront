import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { integer, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const FulfillmentItem = list({
  access: {
    operation: denyAll,
  },
  fields: {
    quantity: integer({
      validation: {
        isRequired: true,
      },
    }),
    fulfillment: relationship({
      ref: "Fulfillment.fulfillmentItems",
    }),
    lineItem: relationship({
      ref: "LineItem.fulfillmentItems",
    }),
    ...trackingFields,
  },
});
