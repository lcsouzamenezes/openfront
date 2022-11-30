import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const TrackingLink = list({
  access: {
    operation: denyAll,
  },
  fields: {
    url: text(),
    trackingNumber: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    idempotencyKey: text(),
    fulfillment: relationship({
      ref: "Fulfillment.trackingLinks",
    }),
    ...trackingFields
  },
});
