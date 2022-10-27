import { list } from "@keystone-6/core";
import { checkbox, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const NotificationProvider = list({
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
