import { useState } from "react";
import { CardTypes } from "../types";
import { v4 as uuid } from "uuid";

export let CARD_VALUES: CardTypes[] = [];

export const useCaloriesTracker = () => {
  const [itemName, setItemName] = useState("");
  const [proteinVal, setProteinVal] = useState(0);
  const [fatVal, setFatVal] = useState(0);
  const [caloriesVal, setCaloriesVal] = useState(0);
  const [carbsVal, setCarbsVal] = useState(0);
  const [quantityVal, setQuantityVal] = useState(0);

  const submitHandler = () => {
    CARD_VALUES.push({
      item_name: itemName,
      protein: proteinVal,
      fat: fatVal,
      calories: caloriesVal,
      carbs: carbsVal,
      quantity: quantityVal,
      id: uuid(),
    });
  };

  const deleteHandler = (id: string) => {
    const updatedCardValues = CARD_VALUES.filter((card) => card.id !== id);
    CARD_VALUES = updatedCardValues;
  };

  const calculateHandler = (action: string, id: string) => {
    switch (action) {
      case "increace":
        setQuantityVal((prevVal) => prevVal + 1);
        break;

      case "decreace":
        setQuantityVal((prevVal) => prevVal - 1);
        if (quantityVal <= 0) {
          deleteHandler(id);
        }
        break;
    }
  };

  const editHandler = (id: string) => {
    CARD_VALUES.push({
      item_name: itemName,
      protein: proteinVal,
      fat: fatVal,
      calories: caloriesVal,
      carbs: carbsVal,
      quantity: quantityVal,
      id: id,
    });
  };

  return {
    setItemName,
    setProteinVal,
    setFatVal,
    setCaloriesVal,
    setCarbsVal,
    setQuantityVal,
    submitHandler,
    calculateHandler,
  };
};
