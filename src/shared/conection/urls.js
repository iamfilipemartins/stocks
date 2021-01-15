// URLS
export const URL_BASE = 'https://cloud.iexapis.com/stable/';
export const URL_LATEST_PRICE = `${URL_BASE}/stock/{company}/quote/latestPrice?token={token}`;
export const URL_COMPANY_DATA = `${URL_BASE}/stock/{company}/company?token={token}`;
export const URL_COMPANY_LOGO = `${URL_BASE}/stock/{company}/logo?token={token}`;
export const URL_GRAPHIC_DATA = `${URL_BASE}/stock/{company}/chart/{range}?token={token}`;
