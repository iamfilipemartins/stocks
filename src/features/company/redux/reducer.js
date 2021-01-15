import {
  SET_COMPANY_DATA,
  SET_COMPANY_GRAPHIC_DATA,
  SET_COMPANY_LATEST_PRICE,
  SET_COMPANY,
  SET_COMPANY_LOGO,
} from './actions';
  
  const INITIAL_STATE = {
    company: null,
    latestPrice: 0.00,
    graphicData: null,
    companyData: null,
    companyLogo: null,
  };
  
const reducer = (state = INITIAL_STATE, action = null) => {
  if (!action) return state;
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case SET_COMPANY_DATA:
      return {
        ...state,
        companyData: action.payload,
      };
    case SET_COMPANY_GRAPHIC_DATA:
      return {
        ...state,
        graphicData: action.payload,
      };
    case SET_COMPANY_LATEST_PRICE:
      return {
        ...state,
        latestPrice: action.payload,
      };
    case SET_COMPANY_LOGO:
      return {
        ...state,
        companyLogo: action.payload,
      };
    default:
      return state;
  }
};
  

export default reducer;