"use strict";

const { buildQuery } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve first organization.
   *
   * @return {Object}
   */

  async findFirst() {
    const { organization } = strapi.models;
    return buildQuery({
      model: organization,
      filters: { limit: 1 },
      sort: [{ field: "createdAt", order: "asc" }],
    });
  },
};
