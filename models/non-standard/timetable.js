const mongoose = require('mongoose');

const Timetable = mongoose.model('Timetable', new mongoose.Schema({
  agency_key: {
    type: String,
    required: true,
    index: true
  },
  timetable_id: {
    type: String,
    index: true
  },
  route_id: {
    type: String,
    index: true
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route'
  },
  direction_id: {
    type: Number,
    index: true,
    min: 0,
    max: 1
  },
  start_date: Number,
  end_date: Number,
  monday: {
    type: Number,
    min: 0,
    max: 1
  },
  tuesday: {
    type: Number,
    min: 0,
    max: 1
  },
  wednesday: {
    type: Number,
    min: 0,
    max: 1
  },
  thursday: {
    type: Number,
    min: 0,
    max: 1
  },
  friday: {
    type: Number,
    min: 0,
    max: 1
  },
  saturday: {
    type: Number,
    min: 0,
    max: 1
  },
  sunday: {
    type: Number,
    min: 0,
    max: 1
  },
  timetable_label: String,
  service_notes: String,
  orientation: String,
  timetable_page_id: {
    type: String,
    index: true
  },
  timetable_page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TimetablePage'
  },
  timetable_sequence: {
    type: Number,
    index: true
  },
  direction_name: String
}));

module.exports = Timetable;
