export const fetchBoards = () => ({
    type: FETCH_BOARDS
});

//saga에서 호출하는 액션
export const fetchBoardsFulfilled = boards => ({
  type: FETCH_BOARDS_FULFILLED,
  payload: boards
});

//saga에서 호출하는 액션
export const fetchBoardsRejected = error => ({
  type: FETCH_BOARDS_REJECTED,
  payload: error
})
