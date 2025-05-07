import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const RecipeContext = createContext();
const API_KEY = `c7765a14-df6e-4ad4-b3dd-51d22d987b5b`;

function RecipeProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activeFoodData, setActiveFoodData] = useState({});
  const [isFoodDataLoading, setIsFoodDataLoading] = useState(false);
  const [foodDataError, setFoodDataError] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showWindow, setShowWindow] = useState(false);

  function checkAlreadyExist(id) {
    const isTrue = cartList.slice().find((item) => item.id === id);
    return Boolean(isTrue);
  }

  function addToCart(food) {
    const alreadyExist = checkAlreadyExist(food.id);
    if (alreadyExist) {
      updateQuantity(food.id, "increase");
    } else {
      if (!food.price) {
        food.price = Math.trunc(Math.random() * 500) + 100;
      }
      setCartList((list) => [...list, { ...food, quantity: 1 }]);
    }
    setTotalPrice((prev) => prev + food.price);
  }

  const updateQuantity = useCallback(
    function updateQuantity(id, type = "increase") {
      const currItem = cartList.slice().find((item) => item.id === id);
      currItem.quantity += type === "increase" ? 1 : -1;
      if (currItem.quantity === 0) {
        removeCartItem(id);
        return;
      }
      setCartList((list) =>
        list.map((item) => (item.id !== id ? item : { ...currItem }))
      );
    },
    [cartList]
  );

  function removeCartItem(id) {
    setCartList((list) => list.filter((item) => item.id !== id));
  }

  function clearCart() {
    if (cartList.length === 0) return;
    setCartList([]);
  }

  useEffect(() => {
    if (!activeId) return;
    const controller = new AbortController();
    setIsFoodDataLoading(true);
    const timer = setTimeout(() => {
      async function fetchData() {
        try {
          const res = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes/${activeId}?key=${API_KEY}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("An Error Occured");
          const curr = await res.json();
          setActiveFoodData(curr?.data?.recipe);
          setIsFoodDataLoading(false);
          setFoodDataError("");
        } catch (err) {
          setIsFoodDataLoading(false);
          if (err.name !== "AbortError") {
            setFoodDataError("No Results Found");
          }
        }
      }
      fetchData();
    }, 750);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [activeId]);

  return (
    <RecipeContext.Provider
      value={{
        cartList,
        setCartList,
        setActiveId,
        activeFoodData,
        isFoodDataLoading,
        foodDataError,
        setShowCategory,
        showCategory,
        addToCart,
        setShowCart,
        showCart,
        updateQuantity,
        totalPrice,
        setTotalPrice,
        clearCart,
        showWindow,
        setShowWindow,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);
  if (context === undefined) throw new Error("Unknown action");

  return context;
}

export { RecipeProvider, useRecipe };
