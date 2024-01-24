import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
    completed: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },

    completeTodo: (state, action) => {
      state.completed.push(action.payload);
      state.value = state.value.filter((t) => t.id != action.payload.id);
    },

    deleteTodo: (state, action) => {
      state.completed = state.completed.filter(
        (t) => t.id != action.payload.id
      );
      state.value = state.value.filter((t) => t.id != action.payload.id);
    },

    clearCompleted: (state) => {
      state.completed = [];
    },
  },
});

export const { add, completeTodo, deleteTodo, clearCompleted } =
  todoSlice.actions;

export const todosReducer = todoSlice.reducer;

//* "Slice" è la porzione dello state globale specifica per questo state (in questo caso todo, ma ce ne possono essere diversi).

//* "Dispatch" è una funzione che consente di invocare i reducer per aggiornare lo state.

//* "Reducer" è una funzione che prende lo stato attuale e un'azione come input e restituisce il nuovo state.

//* il payload è il dato che viene inviato con l'action per aggiornare lo state.
