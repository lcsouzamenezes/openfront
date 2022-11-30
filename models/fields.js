import { checkbox } from "@keystone-6/core/fields"

export const permissionFields = {
  canReadOrders: checkbox({
    defaultValue: false,
    label: "User can read orders"
  }),
  canManageOrders: checkbox({
    defaultValue: false,
    label: "User can update and delete any order"
  }),
  canReadProducts: checkbox({
    defaultValue: false,
    label: "User can read products"
  }),
  canManageProducts: checkbox({
    defaultValue: false,
    label: "User can update and delete any product"
  }),
  canReadFulfillments: checkbox({
    defaultValue: false,
    label: "User can read fulfillments"
  }),
  canManageFulfillments: checkbox({
    defaultValue: false,
    label: "User can update and delete any fulfillment"
  }),
  canReadUsers: checkbox({
    defaultValue: false,
    label: "User can read other users"
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can update and delete other users"
  }),
  canReadRoles: checkbox({
    defaultValue: false,
    label: "User can read other roles"
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can CRUD roles"
  }),
  canReadCarts: checkbox({
    defaultValue: false,
    label: "User can read other carts"
  }),
  canManageCarts: checkbox({
    defaultValue: false,
    label: "User can see and manage carts"
  }),
}

export const permissionsList = Object.keys(permissionFields)
