import { list } from "@keystone-6/core";
import { integer, json, text, timestamp } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const IdempotencyKey = list({
  fields: {
    idempotencyKey: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    requestMethod: text(),
    requestParams: json(),
    requestPath: text(),
    responseCode: integer(),
    responseBody: json(),
    recoveryPoint: text({
      defaultValue: "started",
      validation: {
        isRequired: true,
      },
    }),
    lockedAt: timestamp(),
    ...trackingFields,
  },
});
