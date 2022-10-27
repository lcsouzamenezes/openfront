import { list } from "@keystone-6/core";
import {
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const TrackingLink = list({
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
