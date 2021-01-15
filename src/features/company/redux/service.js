import {
  ConnectApiGet,
  urls,
} from '../../../shared/conection';

import TOKEN_API from '../../../shared/constants';

export const getLatestPriceService = async (company) => {
  const url = urls.URL_LATEST_PRICE.replace('{company}', company).replace('{token}', TOKEN_API);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};

export const getCompanyDataService = async (company) => {
  const url = urls.URL_COMPANY_DATA.replace('{company}', company).replace('{token}', TOKEN_API);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};  

export const getGraphicDataService = async (company, range = '6m') => {
  const url = urls.URL_GRAPHIC_DATA.replace('{company}', company).replace('{range}', range).replace('{token}', TOKEN_API);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};

export const getCompanyLogoService = async (company) => {
  const url = urls.URL_COMPANY_LOGO.replace('{company}', company).replace('{token}', TOKEN_API);
  const returnService = await ConnectApiGet(url);
  return returnService.data;
};

