export const SET_COMPANY = 'company/SET_COMPANY';
export const SET_COMPANY_DATA = 'company/SET_COMPANY_DATA';
export const SET_COMPANY_GRAPHIC_DATA = 'company/SET_COMPANY_GRAPHIC_DATA';
export const SET_COMPANY_LATEST_PRICE = 'company/SET_COMPANY_LATEST_PRICE';
export const SET_COMPANY_LOGO = 'company/SET_COMPANY_LOGO';

export const setCompany = (value) => ({
  type: SET_COMPANY,
  payload: value,
});

export const setCompanyData = (value) => ({
  type: SET_COMPANY_DATA,
  payload: value,
});

export const setCompanyGraphicData = (value) => ({
  type: SET_COMPANY_GRAPHIC_DATA,
  payload: value,
});

export const setCompanyLatestPrice = (value) => ({
  type: SET_COMPANY_LATEST_PRICE,
  payload: value,
});

export const setCompanyLogo = (value) => ({
  type: SET_COMPANY_LOGO,
  payload: value,
});
