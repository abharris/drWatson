// keys for actiontypes
export const ActionTypes = {
  SET_ASSESSMENT: 'SET_ASSESSMENT',
  CLEAR_ASSESSMENT: 'CLEAR_ASSESSMENT',
};

export function wastonAssessment(text) {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}
