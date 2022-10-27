import { list } from "@keystone-6/core";
import {
  checkbox,
  integer,
  json,
  select,
  text,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const DraftOrder = list({
  fields: {
    status: select({
      type: "enum",
      options: [
        {
          label: "Open",
          value: "open",
        },
        {
          label: "Completed",
          value: "completed",
        },
      ],
      defaultValue: "open",
      validation: {
        isRequired: true,
      },
    }),
    displayId: integer({
      validation: {
        isRequired: true,
      },
    }),
    canceledAt: timestamp(),
    completedAt: timestamp(),
    metadata: json(),
    idempotencyKey: text(),
    noNotificationOrder: checkbox(),
    cart: relationship({
      ref: "Cart.draftOrder",
    }),
    order: relationship({
      ref: "Order.draftOrder",
    }),
    ...trackingFields,
  },
});
