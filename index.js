'use strict';

const mongoose = require('mongoose');

const DAY_MS = (24 * 60 * 60 * 1000) - 1;
const MIN = new Date(0);
const MAX = new Date(DAY_MS);

class Time extends mongoose.Schema.Types.Date {
  static schemaName() { return 'Time' }

  constructor () {
    super(arguments);
    this.min(MIN);
    this.max(MAX);
  }
}
mongoose.Schema.Types.Time = Time;

module.exports = Time;
