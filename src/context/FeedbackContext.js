import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
// move global state + any fns to manipulate that state into context. bring directly into components directly. little projects is fine, but as project grows, amount of state and fns that you have to proll drill esp if you have 3-4 component lvls deep that you're passing props manually it can get VERY messy.

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is feedback item 1', rating: 10 },
    { id: 2, text: 'This is feedback item 2', rating: 5 },
    { id: 3, text: 'This is feedback item 3', rating: 7 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update feedback item

  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updateItem } : item;
      })
    );
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
