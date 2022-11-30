import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ReturnReason = list({
  access: {
    operation: denyAll,
  },
  fields: {
    value: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    label: text({
      validation: {
        isRequired: true,
      },
    }),
    description: text(),
    metadata: json(),
    parentReturnReason: relationship({
      ref: "ReturnReason",
    }),
    returnItems: relationship({
      ref: "ReturnItem.returnReason",
      many: true,
    }),
    ...trackingFields
  },
});
