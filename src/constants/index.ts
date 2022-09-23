/**
 * Global constants.
 */
import { AverageSessions } from '../components';

export const DAYS = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6,
};

export const UNITS = {
  calorie: 'kCal',
  protein: 'g',
  carbohydrate: 'g',
  lipid: 'g',
};

export const DAYS_MAP: { [Property in keyof AverageSessions]: string } = {
  monday: 'lundi',
  tuesday: 'mardi',
  wednesday: 'mercredi',
  thursday: 'jeudi',
  friday: 'vendredi',
  saturday: 'samedi',
  sunday: 'dimanche',
};

export const MAX_LAST_SESSIONS = 10;

export const FORMAT_DATE_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
