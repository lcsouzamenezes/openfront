import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  checkbox,
  json,
  select,
  text,
  timestamp,
} from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Invite = list({
  access: {
    operation: denyAll,
  },
  fields: {
    userEmail: text({
      validation: {
        isRequired: true,
      },
    }),
    role: select({
      type: "enum",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Member",
          value: "member",
        },
        {
          label: "Developer",
          value: "developer",
        },
      ],
      defaultValue: "member",
    }),
    accepted: checkbox(),
    metadata: json(),
    token: text({
      validation: {
        isRequired: true,
      },
    }),
    expiresAt: timestamp({
      defaultValue: { kind: "now" },
      validation: {
        isRequired: true,
      },
    }),
    ...trackingFields,
  },
});
