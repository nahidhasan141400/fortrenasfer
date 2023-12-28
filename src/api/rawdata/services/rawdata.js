'use strict';

/**
 * rawdata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rawdata.rawdata');
