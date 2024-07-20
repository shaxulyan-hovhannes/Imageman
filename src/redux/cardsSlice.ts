import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./../types";

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: "e95d6a99-70e4-49f8-91e0-03297e140eee",
      title: "TItle",
      created_at: new Date().toLocaleDateString(),
      description: "fdsjfkldshjflkj",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s",
    },
    {
      id: "35e68b56-f6fb-4635-8c76-0c05a272a261",
      title: "TItle2",
      created_at: new Date().toLocaleDateString(),
      description: "fdsjfkldshjflkj sjkfhdsjkh",
      image:
        "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=ais_user",
    },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, editCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
