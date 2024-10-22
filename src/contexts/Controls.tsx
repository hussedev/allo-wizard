"use client";

import {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";

interface ControlsState {
  settings: {
    strategyName: string;
  };
  features: {
    pausable: boolean;
    upgradable: boolean;
  };
}

type Action =
  | { type: "SET_STRATEGY_NAME"; payload: string }
  | { type: "TOGGLE_FEATURE"; payload: keyof ControlsState["features"] };

const ControlsContext = createContext<
  | {
      settings: ControlsState["settings"];
      setStrategyName: (name: string) => void;
      features: ControlsState["features"];
      toggleFeature: (feature: keyof ControlsState["features"]) => void;
    }
  | undefined
>(undefined);

const controlsReducer = (
  state: ControlsState,
  action: Action
): ControlsState => {
  switch (action.type) {
    case "SET_STRATEGY_NAME":
      return {
        ...state,
        settings: { ...state.settings, strategyName: action.payload },
      };
    case "TOGGLE_FEATURE":
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !state.features[action.payload],
        },
      };
    default:
      return state;
  }
};

export const ControlsProvider = ({ children }: PropsWithChildren) => {
  const initialState: ControlsState = {
    settings: {
      strategyName: "MyStrategy",
    },
    features: {
      pausable: false,
      upgradable: false,
    },
  };

  const [state, dispatch] = useReducer(controlsReducer, initialState);

  const setStrategyName = (name: string) => {
    dispatch({ type: "SET_STRATEGY_NAME", payload: name });
  };

  const toggleFeature = (feature: keyof ControlsState["features"]) => {
    dispatch({ type: "TOGGLE_FEATURE", payload: feature });
  };

  return (
    <ControlsContext.Provider
      value={{
        settings: state.settings,
        setStrategyName,
        features: state.features,
        toggleFeature,
      }}>
      {children}
    </ControlsContext.Provider>
  );
};

export const useControls = () => {
  const context = useContext(ControlsContext);
  if (context === undefined) {
    throw new Error("useControls must be used within a ControlsProvider");
  }
  return context;
};
