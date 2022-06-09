import { AnyAction, Dispatch } from "redux";

export const IncrementActionAnswer = (left: number, right: number, operator: string) => (dispatch: Dispatch<AnyAction>, getState: any) => {
        const {
                Answer: {answers}
        } = getState();
        let answer: number = left + right;
        if (operator==='+') {
                dispatch({
                        type: 'INCREMENT',
                        payload: [{id:answer, answer}, ...answers]
                })
        }
}

export const SubstractActionAnswer = (left: number, right: number, operator: string) => (dispatch: Dispatch, getState: any):void => {
        const {
                Answer: {answers}
        } = getState();
        let answer: number = left - right;
        if (operator === '-') {
                dispatch({
                        type: 'SUBSTRACT',
                        payload: [{id: answer, answer}, ...answers]
                })
        }
}

export const MultiplyActionAnswer = (left: number, right: number, operator: string) => (dispatch: Dispatch, getState: any):void => {
        const {
                Answer: {answers}
        } = getState();
        let answer: number = left * right;
        if (operator === '*') {
                dispatch({
                        type: 'MULTIPLY',
                        payload: [{id: answer, answer}, ...answers]
                })
        }
}

export const DivisionActionAnswer = (left: number, right: number, operator: string) => (dispatch: Dispatch, getState: any):void => {
        const {
                Answer: {answers}
        } = getState();
        let answer: number = left / right;
        if (operator === '/') {
                dispatch({
                        type: 'DIVISION',
                        payload: [{id: answer, answer}, ...answers]
                })
        }
}