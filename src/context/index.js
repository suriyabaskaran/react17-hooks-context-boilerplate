/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import React, {
  createContext, useContext, useReducer, useMemo
} from 'react';
import _ from 'lodash';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

//  React main context
const Store = createContext();

// Setting custom name for the context which is visible on react dev tools
Store.displayName = 'StoreContext';

//  React reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      const revisedProducts = state.products.map(product => {
        const revisedProduct = _.clone(product);
        revisedProduct.quantity = 0;
        return revisedProduct;
      });
      return {
        ...state,
        total: 0,
        products: revisedProducts
      };
    }
    case 'UPDATE_PRODUCT': {
      let total = 0;
      const revisedProducts = state.products.map(product => {
        const revisedProduct = _.clone(product);
        if (product.id === action.id && action.value >= 0) {
          revisedProduct.quantity = action.value;
        }
        total += (revisedProduct.quantity * revisedProduct.price);
        return revisedProduct;
      });

      return { ...state, products: revisedProducts, total: total.toFixed(2) };
    }
    case 'CLEAR_CART_ITEM': {
      let total = 0;
      const revisedProducts = state.products.map(product => {
        const revisedProduct = _.clone(product);
        if (product.id === action.id) {
          revisedProduct.quantity = 0;
        }
        total += (revisedProduct.quantity * revisedProduct.price);
        return revisedProduct;
      });

      return { ...state, products: revisedProducts, total: total.toFixed(2) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//  React context provider
const StoreControllerProvider = ({ children }) => {
  const initialState = {
    currency: '$',
    total: 32.50,
    products: [
      {
        id: 1,
        name: 'Soda',
        quantity: 2,
        price: 1.80,
      },
      {
        id: 2,
        name: 'Chips',
        quantity: 6,
        price: 2.58,
      },
      {
        id: 3,
        name: 'Water',
        quantity: 4,
        price: 3.35,
      }
    ]
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

//  React custom hook for using context
const useStoreController = () => {
  const context = useContext(Store);

  if (!context) {
    throw new Error(
      'useStoreController should be used inside the StoreControllerProvider.'
    );
  }

  return context;
};

// Typechecking props for the StoreControllerProvider
StoreControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const updateProduct = (dispatch, id, value) => dispatch({ type: 'UPDATE_PRODUCT', id, value });
const clearCart = dispatch => dispatch({ type: 'CLEAR_CART' });
const clearCartItem = (dispatch, id) => dispatch({ type: 'CLEAR_CART_ITEM', id });

export {
  StoreControllerProvider,
  useStoreController,
  updateProduct,
  clearCart,
  clearCartItem
};
