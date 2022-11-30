import { list } from "@keystone-6/core";
import { denyAll } from "@keystone-6/core/access";
import { checkbox, relationship } from "@keystone-6/core/fields";

export const TaxProvider = list({
  access: {
    operation: denyAll,
  },
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
