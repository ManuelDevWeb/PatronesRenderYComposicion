import  {useState} from "react";

const useLocalStorage = (itemName, initialValue) => {
  // Implementando localstorage
  const localStorageItem = localStorage.getItem(itemName);
  let itemsStorage;

  // Validando si el localstorage es vacio o no
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    itemsStorage = initialValue;
  } else {
    itemsStorage = JSON.parse(localStorageItem);
  }

  // Manejando estado del array de elementos
  const [items, setItems] = useState(itemsStorage);

  // Función para guardar la información en el localStorage
  const saveItemsLocalStorage = (newItem) => {
    const stringifiedItems = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItems);
    setItems(newItem);
  };

  return [items, saveItemsLocalStorage];
};

export { useLocalStorage };
