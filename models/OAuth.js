import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { json, text } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const OAuth = list({
  access: {
    operation: denyAll,
  },
  fields: {
    displayName: text({
      validation: {
        isRequired: true,
      },
    }),
    applicationName: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    installUrl: text(),
    uninstallUrl: text(),
    data: json(),
    ...trackingFields,
  },
});
