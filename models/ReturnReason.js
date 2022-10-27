import { list } from "@keystone-6/core";
import {
  json,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ReturnReason = list({
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
