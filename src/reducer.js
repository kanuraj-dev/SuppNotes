export const initialState = {
  notes: [
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "banana",
      content: "Mangos, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
    {
      title: "Shopping List",
      content: "banana, Soap, Fruits, Snacks, Tomato, Colddrinks",
      dateTime: "11/5/2020, 10:37:21 AM",
    },
  ],
  search: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
      break;
    case "REMOVE_NOTE":
      const index = action.note.id;
      let newNotes = [...state.notes];

      if (index >= 0) {
        newNotes.splice(index, 1);
      } else {
        console.warn(`Cant remove Note as its not in List!`);
      }

      return {
        ...state,
        notes: newNotes,
      };
      break;
    case "SEARCH":
      return {
        ...state,
        search: action.search,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
