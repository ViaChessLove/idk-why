export const AnswerReducer = (state={answers:[]}, action:any) => {
        switch (action.type) {
                case 'INCREMENT':
                        return {answers: action.payload};
                case 'SUBSTRACT':
                        return {answers: action.payload};
                case 'MULTIPLY':
                        return {answers: action.payload};
                case 'DIVISION':
                        return {answers: action.payload};
                default:
                        return state;
        }
}