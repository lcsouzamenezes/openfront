import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ClaimTag = list({
  access: {
    operation: denyAll,
  },
  fields: {
    value: text({
      validation: {
        isRequired: true,
      },
    }),
    metadata: json(),
    claimItems: relationship({
      ref: "ClaimItem.claimTags",
      many: true,
    }),
    ...trackingFields,
  },
});
