import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { checkbox, json, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Customer = list({
  access: {
    operation: denyAll,
  },
  fields: {
    email: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    firstName: text(),
    lastName: text(),
    billingAddress: text({
      isIndexed: "unique",
    }),
    password: text(),
    phone: text(),
    hasAccount: checkbox(),
    metadata: json(),
    addresses: relationship({
      ref: "Address.customer",
      many: true,
    }),
    orders: relationship({
      ref: "Order.customer",
      many: true,
    }),
    carts: relationship({
      ref: "Cart.customer",
      many: true,
    }),
    customerGroups: relationship({
      ref: "CustomerGroup.customers",
      many: true,
    }),
    notifications: relationship({
      ref: "Notification.customer",
      many: true,
    }),
    ...trackingFields,
  },
});
