import { list } from "@keystone-6/core";
import { checkbox, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const PaymentProvider = list({
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
