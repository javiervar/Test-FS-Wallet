import { getCoinList, getHistory } from "../common/api";

const initialState = {
    coins: [],
    history: []
}

// types
const GET_HISTORY = 'GET_HISTORY';
const GET_COINS = 'GET_COINS';



// reducer
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_COINS:
            return { ...state, coins: action.payload }
        case GET_HISTORY:
            return { ...state, history: action.payload }
        default:
            return state
    }
}



// actions
export const actionCoins = () => async (dispatch: any) => {
    try {
        const params = {
            coins: "bitcoin,solana,ethereum",
            currencies: "mxn"
        }
        const resp = await getCoinList(params);
        const data = resp.details;
        const array=Object.entries(data).map((item:any)=>{
            return {
                name:item[0],
                price:item[1].mxn
            }
        })
        dispatch({
            type: GET_COINS,
            payload: array
        })

    } catch (err) {
        console.error(err)
    }
}


export const actionHistory = () => async (dispatch: any) => {
    try {

        const resp = await getHistory();
        const data = resp.details;

        dispatch({
            type: GET_HISTORY,
            payload: data
        })

    } catch (err) {
        console.error(err)
    }
}