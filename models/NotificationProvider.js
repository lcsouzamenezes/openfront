import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { checkbox, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const NotificationProvider = list({
  access: {
    operation: denyAll,
  },
  fields: {
    isInstalled: checkbox({
      defaultValue: true,
    }),
    notifications: relationship({
      ref: "Notification.notificationProvider",
      many: true,
    }),
    ...trackingFields,
  },
});
