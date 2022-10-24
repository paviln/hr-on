import * as invetoryAPI from '../api/invetoryAPI';

export const getCategoryItemsById = (id: string) => {
  var items = [];

  items = invetoryAPI.items.map((i) => (i.id = id));

  return items;
};
