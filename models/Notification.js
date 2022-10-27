import { list } from "@keystone-6/core";
import { json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Notification = list({
  fields: {
    eventName: text(),
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
    to: text({
      validation: {
        isRequired: true,
      },
    }),
    data: json(),
    parentId: text(),
    notificationProvider: relationship({
      ref: "NotificationProvider.notifications",
    }),
    customer: relationship({
      ref: "Customer.notifications",
    }),
    otherNotifications: relationship({
      ref: "Notification",
      many: true,
    }),
    ...trackingFields,
  },
});
