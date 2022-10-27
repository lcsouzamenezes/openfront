import { list } from "@keystone-6/core";
import { checkbox, relationship } from "@keystone-6/core/fields";

export const TaxProvider = list({
  fields: {
    isInstalled: checkbox({
      defaultValue: true,
    }),
    regions: relationship({
      ref: "Region.taxProvider",
      many: true,
    }),
  },
});
