import axios from 'axios';

export const state = () => ({
	mobileState: false,
	selectedIndustry: ''
});

export const mutations = {
	mobileState(state, data) {
		state.mobileState = !state.mobileState;
	},

	industryState(state, data) {
		state.selectedIndustry = data.data;
	}
};

export const actions = {
	// async LOAD_DATA({ commit }, dataUrl) {
	//   const response = await axios.get(dataUrl);
	//   const data = response.data;
	//   commit('setData', data);
	// }
};
