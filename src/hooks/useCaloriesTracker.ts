import { InputHTMLAttributes, KeyboardEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { CardTypes, CardValue } from "../types";
import { v4 as uuid } from "uuid";

export const useCaloriesTracker = () => {
  const [cardValues, setCardValues] = useState<CardTypes[]>([]);

  const [itemName, setItemName] = useState("");
  const [proteinVal, setProteinVal] = useState(0);
  const [fatVal, setFatVal] = useState(0);
  const [caloriesVal, setCaloriesVal] = useState(0);
  const [carbsVal, setCarbsVal] = useState(0);
  const quantityVal: number = 1;
  const [cardId, setCardId] = useState("");
  const [isEditMode, setIsEditmode] = useState(false);

  const submitHandler = () => {
    setCardValues((prevState) => [
      ...prevState,
      {
        item_name: itemName,
        protein: proteinVal,
        fat: fatVal,
        calories: caloriesVal,
        carbs: carbsVal,
        quantity: quantityVal,
        id: uuid(),
      },
    ]);
  };

  const saveHandler = () => {
    if (!cardId) return;
    setCardValues((prevState) => [
      ...prevState.map((item) =>
        item.id !== cardId
          ? item
          : {
              ...item,
              calories: caloriesVal,
              carbs: carbsVal,
              fat: fatVal,
              item_name: itemName,
              protein: proteinVal,
              quantity: quantityVal,
            }
      ),
    ]);
    setCardId(() => "");
    setIsEditmode(false);
  };

  const deleteHandler = (id: string) => {
    const updatedCardValues = cardValues.filter((card) => card.id !== id);
    setCardValues(updatedCardValues);
  };

  const calculateHandler = useCallback((action: string, id: string) => {
    switch (action) {
      case "increace":
        setCardValues((prevState) => [
          ...prevState.map((item) =>
            item.id !== id
              ? item
              : {
                  ...item,
                  quantity: item.quantity + 1,
                }
          ),
        ]);
        break;

      case "decreace":
        setCardValues((prevState): CardTypes[] =>
          prevState.reduce((accItems, currItem): CardTypes[] => {
            if (currItem.id !== id) return [...accItems, currItem];
            if (currItem.quantity - 1 === 0) return accItems;
            return [
              ...accItems,
              {
                ...currItem,
                quantity: currItem.quantity - 1,
              },
            ];
          }, [] as CardTypes[])
        );
        break;
    }
  }, []);

  const clearAllHandler = () => {
    setCardValues([]);
  };

  const totalHandler = <T extends keyof CardValue>(value: T): number => {
    return cardValues.reduce((acc, obj) => acc + obj[value] * obj.quantity, 0);
  };

  const inputMap: Array<
    InputHTMLAttributes<HTMLInputElement> & {
      onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
    }
  > = useMemo(
    () => [
      {
        id: "name",
        placeholder: "Name",
        value: itemName,
        onChange: (e) => setItemName(e.target.value),
        type: "text",
      },
      {
        id: "protein",
        placeholder: "PRotein (g)",
        value: proteinVal > 0 ? proteinVal : "",
        onChange: (e) => setProteinVal(e.target.valueAsNumber),
        type: "number",
        onKeyDown: (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault(),
      },
      {
        id: "fat",
        placeholder: "Fat (g)",
        value: fatVal > 0 ? fatVal : "",
        onChange: (e) => setFatVal(e.target.valueAsNumber),
        type: "number",
        onKeyDown: (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault(),
      },
      {
        id: "calories",
        placeholder: "Calories",
        value: caloriesVal > 0 ? caloriesVal : "",
        onChange: (e) => setCaloriesVal(e.target.valueAsNumber),
        type: "number",
        onKeyDown: (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault(),
      },
      {
        id: "carbs",
        placeholder: "Carbs (g)",
        value: carbsVal > 0 ? carbsVal : "",
        onChange: (e) => setCarbsVal(e.target.valueAsNumber),
        type: "number",
        onKeyDown: (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault(),
      },
    ],
    [itemName, caloriesVal, carbsVal, fatVal, proteinVal]
  );

  const editHandler = useCallback(
    (id: string) => {
      const itemToEdit = cardValues.find((item) => item.id === id);

      if (!itemToEdit) return;

      setProteinVal(itemToEdit.protein);
      setFatVal(itemToEdit.fat);
      setCaloriesVal(itemToEdit.calories);
      setCarbsVal(itemToEdit.carbs);
      setItemName(itemToEdit.item_name);
      setCardId(itemToEdit.id);
      setIsEditmode(true);
    },
    [cardValues]
  );

  const cards = useMemo(() => cardValues, [cardValues]);

  useEffect(() => {
    console.log("cards, cards", cards);
  }, [cards]);

  return {
    submitHandler,
    saveHandler,
    calculateHandler,
    totalHandler,
    editHandler,
    clearAllHandler,
    deleteHandler,
    isEditMode,
    inputMap,
    cardValues: cards,
  };
};
