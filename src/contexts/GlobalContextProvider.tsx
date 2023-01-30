import React, { useReducer, createContext } from 'react';

export type TCRestaurant = {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  adminId?: string;
};

export interface IGlobalState {
  currentRestaurant: TCRestaurant | null;
  currentProductId: string;
  showInitialSetUp: boolean;
}

const initState: IGlobalState = {
  currentRestaurant: null,
  showInitialSetUp: true,
  currentProductId: '',
};

interface IGlobalContext {
  state: IGlobalState;
  dispatch: Function;
}

export enum EGlobalOps {
  setcurrentRestaurant,
  setCurrentProductId,
}

interface IAction {
  payload?: TCRestaurant;
  type: EGlobalOps;
}
const updateLocalStorage = ({
  key,
  val,
}: {
  key: string;
  val: string | TCRestaurant;
}) => {
  localStorage.setItem(key, JSON.stringify(val));
};
// const removeAuthLocalStorage = ({ key }: { key: string }) => {
//   localStorage.removeItem('currentRestaurant');
// };

const GlobalReducer = (state: IGlobalState, action: IAction): IGlobalState => {
  let newState: IGlobalState = state;
  switch (action.type) {
    case EGlobalOps.setcurrentRestaurant:
      newState = {
        ...state,
        currentRestaurant: action.payload as unknown as TCRestaurant,
      };
      updateLocalStorage({
        key: 'currentRestaurant',
        val: action.payload as unknown as TCRestaurant,
      });

      return newState;
    case EGlobalOps.setCurrentProductId:
      return {
        ...state,
        currentProductId: action.payload as unknown as string,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext<IGlobalContext>({
  state: initState,
  dispatch: Function,
});

interface IProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(
    GlobalReducer,
    initState,
    (): IGlobalState => {
      const localCS = localStorage.getItem('currentRestaurant');
      const currentRestaurant =
        typeof localCS === 'string'
          ? (JSON.parse(localCS) as unknown as TCRestaurant)
          : null;
      return {
        currentRestaurant,
        showInitialSetUp: true,
        currentProductId: '',
      };
    }
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
