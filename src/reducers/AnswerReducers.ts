export const AnswerReducer = (state={answers:[]}, action:any) => {
        switch (action.type) {
                case 'INCREMENT':
                        return {answers: action.payload};
                case 'SUBSTRACT':
                        return {answers: action.payload};
                default:
                        return state;
        }
}