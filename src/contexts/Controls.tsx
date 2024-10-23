"use client";

import {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";

export type TFeatures =
  | "registrable"
  | "allocatable"
  | "fromList"
  | "milestones";

export type TGating = "nft" | "eas" | "token";

export type TExternals = "merkle" | "superfluid";

interface ControlsState {
  settings: {
    strategyName: string;
  };
  features: {
    [key in TFeatures]: boolean;
  };
  gating: {
    [key in TGating]: boolean;
  };
  externals: {
    [key in TExternals]: boolean;
  };
}

type Action =
  | { type: "SET_STRATEGY_NAME"; payload: string }
  | { type: "TOGGLE_FEATURE"; payload: keyof ControlsState["features"] }
  | { type: "TOGGLE_GATING"; payload: keyof ControlsState["gating"] }
  | { type: "TOGGLE_EXTERNAL"; payload: keyof ControlsState["externals"] };

const ControlsContext = createContext<
  | {
      settings: ControlsState["settings"];
      setStrategyName: (name: string) => void;
      features: ControlsState["features"];
      toggleFeature: (feature: keyof ControlsState["features"]) => void;
      gating: ControlsState["gating"];
      toggleGating: (gating: keyof ControlsState["gating"]) => void;
      externals: ControlsState["externals"];
      toggleExternals: (external: keyof ControlsState["externals"]) => void;
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
    case "TOGGLE_GATING":
      return {
        ...state,
        gating: {
          ...state.gating,
          [action.payload]: !state.gating[action.payload],
        },
      };
    case "TOGGLE_EXTERNAL":
      return {
        ...state,
        externals: {
          ...state.externals,
          [action.payload]: !state.externals[action.payload],
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
      registrable: false,
      allocatable: false,
      fromList: false,
      milestones: false,
    },
    gating: {
      nft: false,
      eas: false,
      token: false,
    },
    externals: {
      merkle: false,
      superfluid: false,
    },
  };

  const [state, dispatch] = useReducer(controlsReducer, initialState);

  const setStrategyName = (name: string) => {
    dispatch({ type: "SET_STRATEGY_NAME", payload: name });
  };

  const toggleFeature = (feature: keyof ControlsState["features"]) => {
    dispatch({ type: "TOGGLE_FEATURE", payload: feature });
  };

  const toggleGating = (gating: keyof ControlsState["gating"]) => {
    dispatch({ type: "TOGGLE_GATING", payload: gating });
  };

  const toggleExternals = (external: keyof ControlsState["externals"]) => {
    dispatch({ type: "TOGGLE_EXTERNAL", payload: external });
  };

  return (
    <ControlsContext.Provider
      value={{
        settings: state.settings,
        setStrategyName,
        features: state.features,
        toggleFeature,
        gating: state.gating,
        toggleGating,
        externals: state.externals,
        toggleExternals,
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
