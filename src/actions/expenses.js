import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}, sid) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses/${sid}`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// add Expense to firebase store
export const startAddAllExpenseToStore = eomid => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`oldusers/${uid}/oldexpenses/${eomid}`)
      .remove()
      .then(() => {
        return database
          .ref(`users/${uid}/expenses/${eomid}`)
          .once("value")
          .then(snapshot => {
            snapshot.forEach(childSnapshot => {
              database
                .ref(
                  `oldusers/${uid}/oldexpenses/${eomid}/${childSnapshot.key}`
                )
                .set(childSnapshot.val());
            });
          });
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id, sid } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${sid}/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

//REMOVE_ALL_EXPENSES
export const removeAllExpense = () => ({
  type: "REMOVE_ALL_EXPENSE"
});

export const startRemoveAllExpense = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .remove()
      .then(() => {
        dispatch(removeAllExpense());
      });
  };
};

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

export const startEditExpense = (id, update, sid) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${sid}/${id}`)
      .update(update)
      .then(() => {
        dispatch(editExpense(id, update));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = sid => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${sid}`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
