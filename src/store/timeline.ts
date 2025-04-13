import { createEvent, createStore } from 'effector';

export const selectYear = createEvent<number>();
export const clearYear = createEvent();

export const $selectedYear = createStore<number | null>(null)
  .on(selectYear, (_, year) => year)
  .reset(clearYear);
