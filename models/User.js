import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import {
  json,
  password,
  select,
  text,
  relationship,
} from "@keystone-6/core/fields";
import { permissions, rules } from "../access";
import { trackingFields } from "./trackingFields";

export const User = list({
  access: {
    operation: {
      create: () => true,
      // only people with the permission can delete themselves!
      // You can't delete yourself
      delete: permissions.canManageUsers,
    },
    filter: {
      query: rules.canManageUsers,
      update: rules.canManageUsers,
    },
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ isIndexed: "unique", validation: { isRequired: true } }),
    password: password(),
    role: relationship({
      ref: "Role.assignedTo",
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
    apiKeys: relationship({ ref: "ApiKey.user", many: true }),
    metadata: json(),
    // role: select({
    //   type: "enum",
    //   options: [
    //     {
    //       label: "Admin",
    //       value: "admin",
    //     },
    //     {
    //       label: "Member",
    //       value: "member",
    //     },
    //     {
    //       label: "Developer",
    //       value: "developer",
    //     },
    //   ],
    //   defaultValue: "member",
    // }),

    ...trackingFields,
    // products: relationship({
    //   ref: 'Product.user',
    //   many: true,
    // }),
  },
});
