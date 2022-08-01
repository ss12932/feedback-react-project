import { createContext, useState } from 'react';
// move global state + any fns to manipulate that state into context. bring directly into components directly. little projects is fine, but as project grows, amount of state and fns that you have to proll drill esp if you have 3-4 component lvls deep that you're passing props manually it can get VERY messy.

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This item is from Context', rating: 10 },
  ]);
  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
