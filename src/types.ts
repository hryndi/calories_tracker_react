export type CardTypes = {
  item_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: number;
  id: string;
};

export interface CardValue {
  quantity?: number;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}
