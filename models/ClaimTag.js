import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const ClaimTag = list({
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
