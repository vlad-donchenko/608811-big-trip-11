import {TRIP_COUNT} from "./const";
import {render} from "./utils";
import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createSortTemplate} from "./components/sorting";
import {createTripEditTemplate} from "./components/trip-edit";
import {createTripTemplate} from "./components/trip";
import {createTripInfoTemplate} from "./components/trip-info";
import {createTripPriceTemplate} from "./components/trip-price";
import {createTripInfoWrapperTemplate} from "./components/trip-info-wrapper";
import {createTripDaysTemplate} from "./components/trip-days";
import {createTripDayTemplate} from "./components/trip-day";

const pageHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
render(tripMainElement, createTripInfoWrapperTemplate(), `afterbegin`);

const tripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripInfoElement, createTripInfoTemplate(), `beforeend`);
render(tripInfoElement, createTripPriceTemplate(), `beforeend`);

const tripControlElement = tripMainElement.querySelector(`.trip-main__trip-controls`);
render(tripControlElement, createMenuTemplate(), `beforeend`);
render(tripControlElement, createFilterTemplate(), `beforeend`);

const pageMainElement = document.querySelector(`.page-main`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);
render(tripEventsElement, createSortTemplate(), `beforeend`);

render(tripEventsElement, createTripEditTemplate(), `beforeend`);

render(tripEventsElement, createTripDaysTemplate(), `beforeend`);

const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);
render(tripDaysElement, createTripDayTemplate(), `beforeend`);

const tripEventsListElement = tripDaysElement.querySelector(`.trip-events__list`);

for (let i = 0; i < TRIP_COUNT; i++) {
  render(tripEventsListElement, createTripTemplate(), `beforeend`);
}
