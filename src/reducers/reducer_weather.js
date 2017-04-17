import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	console.log('Action received', action);
	switch (action.type) {
		case FETCH_WEATHER:
			//console.log('Entramos en Fetch',  action.payload.data);
			//console.log('Entramos en state',  state);
			//console.log ([ action.payload.data, ...state ]);
			return [ action.payload.data, ...state ];
	}
	return state;
}