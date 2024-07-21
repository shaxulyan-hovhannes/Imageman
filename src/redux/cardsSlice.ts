import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from './../types';

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: 'e95d6a99-70e4-49f8-91e0-03297e140eee',
      title: 'Lorem Ipsum is dolor',
      created_at: '12.05.2021',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        'https://media.istockphoto.com/id/1917725844/photo/digital-gears-on-future-tech-background-productivity-evolution-futuristic-gears-and-digital.webp?b=1&s=170667a&w=0&k=20&c=-iDYYMhX-uZ-LDlr4j-ifLsMWQSeieUPJoqzbI8RY2k=',
    },
    {
      id: '35e68b56-f6fb-4635-8c76-0c05a272a261',
      title: 'Lorem Ipsum is dolor',
      created_at: '12.05.2021',
      description: 'fdsjfkldshjflkj sjkfhdsjkh',
      image:
        'https://media.istockphoto.com/id/1312850689/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-concept.jpg?s=612x612&w=0&k=20&c=l1xAzPJUjbROnui5McM-_vbDswAg5OoSzwJuFpdj3WE=',
    },
  ],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id,
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
