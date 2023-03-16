export const displayAppropriateText = (introVal: number, extroVal: number) => {
  if (introVal > extroVal) {
    return 'Congrats, you are an introvert!';
  }
  return 'Congrats, you are an extrovert!';
};
