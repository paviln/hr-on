import * as invetoryAPI from '../api/invetoryAPI';

export const getCategories = () => {
  var categories = [];

  categories = invetoryAPI.categories;

  return categories;
};
