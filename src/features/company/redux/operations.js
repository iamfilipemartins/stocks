
import {
  getCompanyDataService,
  getGraphicDataService,
  getLatestPriceService,
  getCompanyLogoService,
} from './service';

import * as companyActions from './actions';

export const setCompany = (company) => async (dispatch) => {
  try {
    dispatch(companyActions.setCompany(company));
  } catch (error) {
    dispatch(companyActions.setCompany(null));
  }
};

export const getLatestPrice = (company) => async (dispatch) => {
  try {
    const result = await getLatestPriceService(company);
    dispatch(companyActions.setCompanyLatestPrice(result));
  } catch (error) {
    dispatch(companyActions.setCompanyLatestPrice(0.00));
  }
};

export const getGraphicData = (company) => async (dispatch) => {
  try {
    const result = await getGraphicDataService(company);
    dispatch(companyActions.setCompanyGraphicData(result));
  } catch (error) {
    dispatch(companyActions.setCompanyGraphicData(null));
  }
};

export const getCompanyData = (company) => async (dispatch) => {
  try {
    const result = await getCompanyDataService(company);
    dispatch(companyActions.setCompanyData(result));
  } catch (error) {
    dispatch(companyActions.setCompanyData(null));
  }
};

export const getCompanyLogo = (company) => async (dispatch) => {
  try {
    const result = await getCompanyLogoService(company);
    dispatch(companyActions.setCompanyLogo(result));
  } catch (error) {
    dispatch(companyActions.setCompanyLogo(null));
  }
};