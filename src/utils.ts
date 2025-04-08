
type Intial<OptionsList extends number[]> = {
  total: number;
  perPageOptions: OptionsList;
  perPageInitial: OptionsList[number];
};

export interface Item {
  id: number;
  item: string;
}

export const initialData: Intial<[3, 5, 10, 20]> = {
  total: 42,
  perPageOptions: [3, 5, 10, 20],
  perPageInitial: 5,
};

export const items: Item[] = getNumbers(1, initialData.total).map((n, i) => ({
  id: i,
  item: `Item ${n}`,
}));


export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const getItemsData = (items: Item[], perPage: number, activePage: number) => {
  const firstItemOnPage = perPage * activePage - perPage + 1;
  const lastItemOnPage =
    perPage * activePage > initialData.total
      ? initialData.total
      : perPage * activePage;

  return {
    message: `${firstItemOnPage} - ${lastItemOnPage}`,
    list: items.filter((_item, i) => {
      return i + 1 >= firstItemOnPage && i + 1 <= lastItemOnPage;
    }),
  };
}