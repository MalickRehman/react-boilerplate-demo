/* eslint-disable no-underscore-dangle */
import _filter from "lodash/filter";
import _find from "lodash/find";
import _first from "lodash/first";
import _forEach from "lodash/forEach";
import _get from "lodash/get";
import _isArray from "lodash/isArray";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import _head from "lodash/head";
import _isEqual from "lodash/isEqual";
import _isNumber from "lodash/isNumber";
import _sum from "lodash/sum";
import _sumBy from "lodash/sumBy";
import _range from "lodash/range";
import _sortBy from "lodash/sortBy";
import _cloneDeep from "lodash/cloneDeep";
import _isString from "lodash/isString";
import _toLower from "lodash/toLower";
import _groupBy from "lodash/groupBy";
import _findIndex from "lodash/findIndex";
import _debounce from "lodash/debounce";

export const get = (...args) => _get(...args);

export const debounce = (...args) => _debounce(...args);

export const isEmpty = (...args) => _isEmpty(...args);

export const map = (...args) => _map(...args);

export const forEach = (...args) => _forEach(...args);

export const filter = (...args) => _filter(...args);

export const first = (...args) => _first(...args);

export const isArray = (...args) => _isArray(...args);

export const head = (...args) => _head(...args);

export const find = (...args) => _find(...args);

export const isEqual = (...args) => _isEqual(...args);

export const isNumber = (...args) => _isNumber(...args);

export const sum = (...args) => _sum(...args);

export const sumBy = (...args) => _sumBy(...args);

export const range = (...args) => _range(...args);

export const sortBy = (...args) => _sortBy(...args);

export const cloneDeep = (...args) => _cloneDeep(...args);

export const isString = (...args) => _isString(...args);

export const toLower = (...args) => _toLower(...args);

export const groupBy = (...args) => _groupBy(...args);

export const findIndex = (...args) => _findIndex(...args);
