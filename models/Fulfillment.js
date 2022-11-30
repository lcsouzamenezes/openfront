import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  checkbox,
  json,
  text,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Fulfillment = list({
  access: {
    operation: denyAll,
  }, 
  fields: {
    trackingNumbers: json({
      defaultValue: "[]",
    }),
    data: json(),
    shippedAt: timestamp(),
    canceledAt: timestamp(),
    metadata: json(),
    idempotencyKey: text(),
    noNotification: checkbox(),
    swap: relationship({
      ref: "Swap.fulfillments",
    }),
    fulfillmentProvider: relationship({
      ref: "FulfillmentProvider.fulfillments",
    }),
    claimOrder: relationship({
      ref: "ClaimOrder.fulfillments",
    }),
    order: relationship({
      ref: "Order.fulfillments",
    }),
    fulfillmentItems: relationship({
      ref: "FulfillmentItem.fulfillment",
      many: true,
    }),
    trackingLinks: relationship({
      ref: "TrackingLink.fulfillment",
      many: true,
    }),
    ...trackingFields,
  },
});
