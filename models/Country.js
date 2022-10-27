import { list } from "@keystone-6/core";
import { integer, text, relationship } from "@keystone-6/core/fields";
import { trackingFields } from "./trackingFields";

export const Country = list({
  fields: {
    iso2: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    iso3: text({
      validation: {
        isRequired: true,
      },
    }),
    numCode: integer({
      validation: {
        isRequired: true,
      },
    }),
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    displayName: text({
      validation: {
        isRequired: true,
      },
    }),
    region: relationship({
      ref: "Region.countries",
    }),
    addresses: relationship({
      ref: "Address.country",
      many: true,
    }),
    ...trackingFields,
  },
});
