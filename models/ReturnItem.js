import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  checkbox,
  integer,
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ReturnItem = list({
  access: {
    operation: denyAll,
  },
  fields: {
    quantity: integer({
      validation: {
        isRequired: true,
      },
    }),
    isRequested: checkbox({
      defaultValue: true,
    }),
    requestedQuantity: integer(),
    receivedQuantity: integer(),
    metadata: json(),
    note: text(),
    return: relationship({
      ref: "Return.returnItems",
    }),
    lineItem: relationship({
      ref: "LineItem.returnItems",
    }),
    returnReason: relationship({
      ref: "ReturnReason.returnItems",
    }),
    ...trackingFields
  },
});
