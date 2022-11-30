import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  integer,
  json,
  select,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Refund = list({
  access: {
    operation: denyAll,
  },
  fields: {
    amount: integer({
      validation: {
        isRequired: true,
      },
    }),
    note: text(),
    reason: select({
      type: "enum",
      options: [
        {
          label: "Discount",
          value: "discount",
        },
        {
          label: "Return",
          value: "return",
        },
        {
          label: "Swap",
          value: "swap",
        },
        {
          label: "Claim",
          value: "claim",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
      validation: {
        isRequired: true,
      },
    }),

    metadata: json(),
    idempotencyKey: text(),
    order: relationship({
      ref: "Order.refunds",
    }),
    ...trackingFields,
  },
});
