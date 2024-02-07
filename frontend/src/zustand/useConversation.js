import { create } from "zustand";

const userConversation = create(
  (set = {
    selectedConversation: null,
    setselectedConversation: (selectedConversation) =>
      set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
  })
);

export default userConversation;
