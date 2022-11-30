import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { checkbox, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const PaymentProvider = list({
  access: {
    operation: denyAll,
  },
  fields: {
    isInstalled: checkbox({
      defaultValue: true,
    }),
    regions: relationship({
      ref: "Region.paymentProviders",
      many: true,
    }),
    paymentSessions: relationship({
      ref: "PaymentSession.paymentProvider",
      many: true,
    }),

    ...trackingFields,
  },
});
