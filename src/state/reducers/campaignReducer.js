import _ from "lodash";

const CAMPAIGNS = {
  1: {
    title: "Q1 activity 2021",
    description: "Last year's budget leftovers.",
    participants: 100,
    modules: 5,
    cost: "10,000",
    scheduled: "Mar 12, 2019",
    user: {
      name: "Monty",
      avatar: "https://semantic-ui.com/images/avatar/small/jenny.jpg",
    },
  },
  2: {
    title: "Passover activity 2019",
    description:
      "Heavy Meital stopped eating cakes so there was some money left in the cashbox.",
    participants: 50,
    modules: 10,
    cost: "50,000",
    scheduled: "Nov 2, 2020",
    user: {
      name: "Shlomi",
      avatar: "https://semantic-ui.com/images/avatar/small/steve.jpg",
    },
  },
};

const campaignReducer = (state = CAMPAIGNS, action) => {
  switch (action.type) {
    case "NEW_CAMPAING":
      return { ...state, [_.size(Object.keys(state)) + 1]: action.payload };
    case "ADD_RECIPIENTS": {
      const id = _.size(Object.keys(state));
      Object.assign(state[id], action.payload);
      return { ...state };
    }
    case "ADD_MODULES": {
      const id = _.size(Object.keys(state));
      Object.assign(state[id], action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default campaignReducer;
