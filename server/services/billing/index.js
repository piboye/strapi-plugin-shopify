'use strict';

const plan = require('./plan');
const subscription = require('./subscription');
const usageRecord = require('./usage-record');
const utils = require('./utils');

const disableBilling = process.env.SHOPIFY_DISABLE_BILLING === 'true';

const enabledExport = {
  plan: plan,
  subscription: subscription,
  'usage-record': usageRecord,
  'billing-utils': utils,
};

module.exports = !disableBilling ? enabledExport : {};
