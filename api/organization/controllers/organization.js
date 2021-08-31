"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve first organization.
   *
   * @return {Object}
   */

  async findFirst() {
    const organization = await strapi.services.organization.findOne({
      _sort: "createdAt:asc",
      _publicationState: "live",
    });
    return sanitizeEntity(organization, { model: strapi.models.organization });
  },
};
