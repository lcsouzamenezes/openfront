import { list } from "@keystone-6/core";
import { json, text } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Note = list({
  fields: {
    value: text({
      validation: {
        isRequired: true,
      },
    }),
    resourceType: text({
      validation: {
        isRequired: true,
      },
    }),
    resourceId: text({
      validation: {
        isRequired: true,
      },
    }),
    authorId: text(),
    metadata: json(),
    ...trackingFields,
  },
});
