import { list } from "@keystone-6/core";
import { checkbox, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const FulfillmentProvider = list({
  fields: {
    isInstalled: checkbox({
      defaultValue: true,
    }),
    fulfillments: relationship({
      ref: "Fulfillment.fulfillmentProvider",
      many: true,
    }),
    regions: relationship({
      ref: "Region.fulfillmentProviders",
      many: true,
    }),
    shippingOptions: relationship({
      ref: "ShippingOption.fulfillmentProvider",
      many: true,
    }),
    ...trackingFields
  },
});
