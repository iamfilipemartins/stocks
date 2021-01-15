import {
  URL_ACCESS_TOKEN,
  URL_APP_EVALUATION,
  URL_BALANCE_CASHBACK,
  URL_BALANCE_STATEMENT,
  URL_BANNER_CASHBACK,
  URL_BEM_FILTERED_QUESTIONS,
  URL_BEM_QUESTIONS,
  URL_BEM_QUESTION_CATEGORIES,
  URL_BEM_SET_TOKEN_ORDER,
  URL_BEM_VALIDATE_TOKEN_ORDER,
  URL_BOLETO,
  URL_BRANCHES_AVAILABLE,
  URL_CASHBACK_ACCEPTED_USER,
  URL_CASHBACK_ORDER_SERVICE,
  URL_CASHBACK_RULES,
  URL_CASHBACK_SERVICES,
  URL_CASHBACK_TERMS,
  URL_CASHBACK_TERMS_AGREE,
  URL_CHANGE_PASSWORD,
  URL_CHANGE_PASSWORD_DATA,
  URL_CLIENT_RCA,
  URL_COD_PAYMENT,
  URL_CREATE_NEW_USER,
  URL_DELIVERY_TIME,
  URL_FIND_CNPJ_DATA,
  URL_FORGET_PASSWORD,
  URL_GET_PROFILE_CASHBACK,
  URL_INFO_USER,
  URL_LOGIN,
  URL_MARKET_ANDROID,
  URL_MARKET_IOS,
  URL_ORDERS_CUSTOMER,
  URL_ORDER_INVOICE,
  URL_ORDER_INVOICE_XML,
  URL_ORDER_PRODUCTS,
  URL_VALIDATE_COUPON,
  URL_ORDER_STATUS,
  URL_PASSWORD_RCA,
  URL_PAYMENT,
  URL_PAYMENT_MODE,
  URL_PREFERENCES,
  URL_PRE_PAYMENT,
  URL_PRICE_PRODUCT,
  URL_PRODUCT_ESPECIFICATIONS,
  URL_PROMOTIONS_BANNERS,
  URL_PROMOTIONS_HOME,
  URL_RCA_MANAGER,
  URL_REGISTER_QUESTION,
  URL_REGISTER_QUESTION_EVALUATION,
  URL_REGISTER_USER_CASHBACK,
  URL_RESERVE_WALLET_BEM,
  URL_SEARCH_PRODUCT,
  URL_SEND_TOKEN,
  URL_SEND_TOKEN_FIREBASE,
  URL_SET_TOKEN_GENERATE,
  URL_SUGGESTION,
  URL_TERMS_AND_POLITICS,
  URL_UPDATE_PROFILE,
  URL_VALIDATE_SMS_TOKEN,
  URL_VALIDATOR_TOKEN,
  URL_VALID_EMAIL,
  URL_VERSION_APP,
  URL_ICMS,
} from '../urls';

import {
  URL_BASE_MARTINS_ATACADO as BASE_MARTINS_ATACADO,
  URL_BASE_BIGGY_LABS as BASE_BIGGY_LABS,
  URL_BASE_SSD as BASE_SSD,
  URL_BASE_SSD_ENV_BEM as BASE_SSD_ENV_BEM,
  URL_BASE_SSD_ENV_BEM_B2B as BASE_SSD_ENV_BEM_B2B,
  URL_BASE_SSD_ENV as BASE_SSD_ENV,
  URL_BASE_SSD_LOGIN as BASE_SSD_LOGIN,
  GOOGLE_PACKAGE_NAME,
  APPLE_STORE_ID,
  URL_BASE_SSD_ENV_BEM_MARTINS as BASE_SSD_ENV_BEM_MARTINS,
} from '../../../../../env.json';

const LOCAL_URL_VALID_EMAIL = `${BASE_MARTINS_ATACADO}/login/units?email={email}`;

const LOCAL_URL_SEARCH_PRODUCT = `${BASE_BIGGY_LABS}/search-api/v1/martins/api`;
const LOCAL_URL_SUGGESTION = `${BASE_BIGGY_LABS}/search-api/v1/martins/api/suggestion_searches?term={search}`;

const LOCAL_URL_LOGIN = `${BASE_SSD_LOGIN}/access-tokens`;
const LOCAL_URL_ACCESS_TOKEN = `${BASE_SSD}/oauth/access-token`;
const LOCAL_URL_PASSWORD_RCA = `${BASE_SSD_ENV}/representante/login`;
const LOCAL_URL_PRICE_PRODUCT = `${BASE_SSD_ENV}/produtos`;
const LOCAL_URL_INFO_USER = `${BASE_SSD_ENV}/cliente/obterDadosBasicoCliente`;
const LOCAL_URL_RCA_MANAGER = `${BASE_SSD_ENV}/representante/obterListaRepresentanteSupervisor?codsup={codManager}`;

const LOCAL_URL_PREFERENCES = `${BASE_SSD_ENV}/cliente/obterPreferencia`;
const LOCAL_URL_PRE_PAYMENT = `${BASE_SSD_ENV}/pedidos/prevalidacao`;
const LOCAL_URL_PAYMENT = `${BASE_SSD_ENV}/pedidos/gravarpedido`;
const LOCAL_URL_BOLETO = `${BASE_SSD_ENV}/boletos`;
const LOCAL_URL_COD_PAYMENT = `${BASE_SSD_ENV}/pedidos/obterNumeroPedidoVendedorParceiro?codopdtrcetn=9`;
const LOCAL_URL_PAYMENT_MODE = `${BASE_SSD_ENV}/clientes/{codCli}/pagamentos`;
const LOCAL_URL_PRODUCT_ESPECIFICATIONS = `${BASE_SSD_ENV}/produtos/detalhe?codmer={codProduct}`;
const LOCAL_URL_ORDERS_CUSTOMER = `${BASE_SSD_ENV}/pedidos/obterRetornoPedidoV2?codcli={codCostumer}&dias={days}`;
const LOCAL_URL_ORDER_INVOICE = `${BASE_SSD_ENV}/pedidos/obterDanfeNFe?codcli={codCostumer}&numngcvnd={orderNumber}`;
const LOCAL_URL_ORDER_INVOICE_XML = `${BASE_SSD_ENV}/pedidos/obterXMLNFe?codcli={codCostumer}&numngcvnd={orderNumber}`;

const LOCAL_URL_VALIDATE_COUPON = `${BASE_SSD_ENV}/pedidos/verificarCupons`;
const LOCAL_URL_ORDER_STATUS = `${BASE_SSD_ENV}/pedidos/obterRetornoPedidoDetalheV2?codcli={codCustomer}&numNgcVnd={orderNumber}&numSltPedBtb={numSltPedBtb}`;
const LOCAL_URL_ORDER_PRODUCTS = `${BASE_SSD_ENV}/pedidos/obterRetornoPedidoItemV2?codcli={codCli}&numNgcVnd={numNgcVnd}&numSltPedBtb={numSltPedBtb}&nomeSeller={nomeSeller}`;
const LOCAL_URL_PROMOTIONS_HOME = `${BASE_SSD_ENV}/cliente/consultaOfertas?codCli={codCli}`;
const LOCAL_URL_PROMOTIONS_BANNERS = `${BASE_SSD_ENV}/cliente/consultaBanner?codCli={codCli}`;
const LOCAL_URL_SEND_TOKEN_FIREBASE = `${BASE_SSD_ENV}/cliente/salvarTokenCliente`;

const LOCAL_URL_RESERVE_WALLET_BEM = `${BASE_SSD_ENV_BEM_B2B}/carteiradigital/efetuarReserva`;
const LOCAL_URL_BANNER_CASHBACK = `${BASE_SSD_ENV_BEM}/ObterImagemBanner?codcli={codCli}&email={email}`;
const LOCAL_URL_BALANCE_CASHBACK = `${BASE_SSD_ENV_BEM_B2B}/carteiradigital/obterSaldoCliente?cnpj={codCli}`;
const LOCAL_URL_BALANCE_STATEMENT = `${BASE_SSD_ENV_BEM_B2B}/carteiradigital/obterExtrato?cnpj={codCli}`;
const LOCAL_URL_BEM_QUESTION_CATEGORIES = `${BASE_SSD_ENV_BEM}/GetCategorias`;
const LOCAL_URL_BEM_QUESTIONS = `${BASE_SSD_ENV_BEM}/GetPerguntas`;
const LOCAL_URL_CASHBACK_RULES = `${BASE_SSD_ENV_BEM_B2B}/produtos/detalheRelacionamentoParceiro?codbrf={codBrf}`;
const LOCAL_URL_REGISTER_USER_CASHBACK = `${BASE_SSD_ENV_BEM}/InserirClienteBem`;
const LOCAL_URL_SET_TOKEN_GENERATE = `${BASE_SSD_ENV_BEM}/GerarTokenSMS`;
const LOCAL_URL_VALIDATE_SMS_TOKEN = `${BASE_SSD_ENV_BEM}/ValidarToken?numSeqTkn={codToken}`;
const LOCAL_URL_GET_PROFILE_CASHBACK = `${BASE_SSD_ENV_BEM}/ObterClienteBem?codcli={codCli}&email={email}`;
const LOCAL_URL_CASHBACK_ACCEPTED_USER = `${BASE_SSD_ENV_BEM}/VerificarClienteAceitaCompromisso?codcli={codCli}&email={emailCli}`;
const LOCAL_URL_CASHBACK_TERMS = `${BASE_SSD_ENV_BEM}/GetTermoCompromisso?numSeq=1`;
const LOCAL_URL_CASHBACK_TERMS_AGREE = `${BASE_SSD_ENV_BEM}/AceitarTermoClienteBem?codcli={codCli}&email={emailCli}`;
const LOCAL_URL_CASHBACK_SERVICES = `${BASE_SSD_ENV_BEM_MARTINS}/GetService2?passe=38a5a7e1-4868-4f21-a701-202a82b317b1&cod=0`;
const LOCAL_URL_CASHBACK_ORDER_SERVICE = `${BASE_SSD_ENV_BEM_MARTINS}/CadastroIndicacaoMTK`;
const LOCAL_URL_REGISTER_QUESTION = `${BASE_SSD_ENV_BEM}/InserirSugestaoPergunta`;
const LOCAL_URL_REGISTER_QUESTION_EVALUATION = `${BASE_SSD_ENV_BEM}/InserirLikeDeslikePergunta`;
const LOCAL_URL_BEM_FILTERED_QUESTIONS = `${BASE_SSD_ENV_BEM}/GetPerguntasLivres?despgn={searchTerm}`;
const LOCAL_URL_BEM_SET_TOKEN_ORDER = `${BASE_SSD_ENV_BEM}/GerarTokenSMSPedido`;
const LOCAL_URL_BEM_VALIDATE_TOKEN_ORDER = `${BASE_SSD_ENV_BEM}/ValidarTokenPedido?numSeqTkn={codToken}`;

const LOCAL_URL_APP_EVALUATION = `${BASE_SSD_ENV}/cliente/salvarOpiniaoClienteAppVendas`;
const LOCAL_URL_FORGET_PASSWORD = `${BASE_SSD_ENV}/cliente/inserirSltAlteracaoSenha`;
const LOCAL_URL_TERMS_AND_POLITICS = `${BASE_SSD_ENV}/cliente/obterTermoUso`;
const LOCAL_URL_DELIVERY_TIME = `${BASE_SSD_ENV}/pedidos/previsaoentrega`;

const LOCAL_URL_BRANCHES_AVAILABLE = `${BASE_SSD_ENV}/cliente/consultaFilialDisponivelApp?codEstUniDsn={state}`;
const LOCAL_URL_VERSION_APP = `${BASE_SSD_ENV}/cliente/consultaAtualizarVersao?codopdtrcetn=9&nroVersaoApp={versionApp}&tipoSO={tipoSO}`;
const LOCAL_URL_CLIENT_RCA = `${BASE_SSD_ENV}/representante/obterClienteRca?codRep={codRep}`;
const LOCAL_URL_MARKET_ANDROID = `market://details?id=${GOOGLE_PACKAGE_NAME}`;
const LOCAL_URL_MARKET_IOS = `itms-apps://itunes.apple.com/pt/app/id${APPLE_STORE_ID}?mt=8`;

const LOCAL_URL_FIND_CNPJ_DATA = `${BASE_SSD_ENV}/cliente/obterDadosClienteNovo?email={emailCli}&numCnpj={cnpjCli}`;
const LOCAL_URL_CREATE_NEW_USER = `${BASE_SSD_ENV}/cliente/cadastra`;
const LOCAL_URL_SEND_TOKEN = `${BASE_SSD_ENV}/cliente/enviarTokenUsuario`;
const LOCAL_URL_VALIDATOR_TOKEN = `${BASE_SSD_ENV}/cliente/validarToken`;
const LOCAL_URL_UPDATE_PROFILE = `${BASE_SSD_ENV}/cliente/alterarDadosCliente`;
const LOCAL_URL_CHANGE_PASSWORD = `${BASE_SSD_ENV}/cliente/alterarSenhaCliente`;
const LOCAL_URL_CHANGE_PASSWORD_DATA = `${BASE_SSD_ENV}/cliente/getDadosRecuperaSenha?fone={fone}&email={email}`;

const LOCAL_URL_ICMS = `${BASE_SSD_ENV}/produtos/InformacoesICMS?UFSeller={UFSeller}&UFCliente={UFCliente}`;

describe('urls constants test', () => {
  it('testing URL_RCA_MANAGER ', () => {
    expect(LOCAL_URL_RCA_MANAGER).toEqual(URL_RCA_MANAGER);
  });

  it('testing URL_VALID_EMAIL ', () => {
    expect(LOCAL_URL_VALID_EMAIL).toEqual(URL_VALID_EMAIL);
  });

  it('testing URL_SEARCH_PRODUCT ', () => {
    expect(URL_SEARCH_PRODUCT).toEqual(LOCAL_URL_SEARCH_PRODUCT);
  });

  it('testing URL_SUGGESTION ', () => {
    expect(URL_SUGGESTION).toEqual(LOCAL_URL_SUGGESTION);
  });

  it('testing URL_LOGIN ', () => {
    expect(URL_LOGIN).toEqual(LOCAL_URL_LOGIN);
  });

  it('testing URL_ACCESS_TOKEN ', () => {
    expect(URL_ACCESS_TOKEN).toEqual(LOCAL_URL_ACCESS_TOKEN);
  });

  it('testing URL_PASSWORD_RCA ', () => {
    expect(URL_PASSWORD_RCA).toEqual(LOCAL_URL_PASSWORD_RCA);
  });

  it('testing URL_PROMOTIONS_HOME ', () => {
    expect(URL_PROMOTIONS_HOME).toEqual(LOCAL_URL_PROMOTIONS_HOME);
  });

  it('testing URL_PRICE_PRODUCT ', () => {
    expect(URL_PRICE_PRODUCT).toEqual(LOCAL_URL_PRICE_PRODUCT);
  });

  it('testing URL_INFO_USER ', () => {
    expect(URL_INFO_USER).toEqual(LOCAL_URL_INFO_USER);
  });

  it('testing URL_PREFERENCES ', () => {
    expect(URL_PREFERENCES).toEqual(LOCAL_URL_PREFERENCES);
  });

  it('testing URL_PRE_PAYMENT ', () => {
    expect(URL_PRE_PAYMENT).toEqual(LOCAL_URL_PRE_PAYMENT);
  });

  it('testing URL_PAYMENT ', () => {
    expect(URL_PAYMENT).toEqual(LOCAL_URL_PAYMENT);
  });

  it('testing URL_BOLETO ', () => {
    expect(URL_BOLETO).toEqual(LOCAL_URL_BOLETO);
  });

  it('testing URL_COD_PAYMENT ', () => {
    expect(URL_COD_PAYMENT).toEqual(LOCAL_URL_COD_PAYMENT);
  });

  it('testing URL_PAYMENT_MODE ', () => {
    expect(URL_PAYMENT_MODE).toEqual(LOCAL_URL_PAYMENT_MODE);
  });

  it('testing URL_PRODUCT_ESPECIFICATIONS ', () => {
    expect(URL_PRODUCT_ESPECIFICATIONS).toEqual(
      LOCAL_URL_PRODUCT_ESPECIFICATIONS,
    );
  });

  it('testing URL_ORDERS_CUSTOMER ', () => {
    expect(URL_ORDERS_CUSTOMER).toEqual(LOCAL_URL_ORDERS_CUSTOMER);
  });

  it('testing URL_ORDER_INVOICE ', () => {
    expect(URL_ORDER_INVOICE).toEqual(LOCAL_URL_ORDER_INVOICE);
  });

  it('testing URL_ORDER_INVOICE_XML ', () => {
    expect(URL_ORDER_INVOICE_XML).toEqual(LOCAL_URL_ORDER_INVOICE_XML);
  });

  it('testing URL_VALIDATE_COUPON', () => {
    expect(URL_VALIDATE_COUPON).toEqual(LOCAL_URL_VALIDATE_COUPON);
  });

  it('testing URL_ORDER_STATUS ', () => {
    expect(URL_ORDER_STATUS).toEqual(LOCAL_URL_ORDER_STATUS);
  });

  it('testing URL_ORDER_PRODUCTS ', () => {
    expect(URL_ORDER_PRODUCTS).toEqual(LOCAL_URL_ORDER_PRODUCTS);
  });

  it('testing URL_SUGGESTION ', () => {
    expect(URL_SUGGESTION).toEqual(LOCAL_URL_SUGGESTION);
  });

  it('testing URL_PROMOTIONS_BANNERS ', () => {
    expect(URL_PROMOTIONS_BANNERS).toEqual(LOCAL_URL_PROMOTIONS_BANNERS);
  });

  it('testing URL_SEND_TOKEN_FIREBASE ', () => {
    expect(URL_SEND_TOKEN_FIREBASE).toEqual(LOCAL_URL_SEND_TOKEN_FIREBASE);
  });

  it('testing URL_RESERVE_WALLET_BEM ', () => {
    expect(URL_RESERVE_WALLET_BEM).toEqual(LOCAL_URL_RESERVE_WALLET_BEM);
  });

  it('testing URL_BANNER_CASHBACK ', () => {
    expect(URL_BANNER_CASHBACK).toEqual(LOCAL_URL_BANNER_CASHBACK);
  });

  it('testing URL_BALANCE_CASHBACK ', () => {
    expect(URL_BALANCE_CASHBACK).toEqual(LOCAL_URL_BALANCE_CASHBACK);
  });

  it('testing URL_BALANCE_STATEMENT ', () => {
    expect(URL_BALANCE_STATEMENT).toEqual(LOCAL_URL_BALANCE_STATEMENT);
  });

  it('testing URL_BEM_QUESTION_CATEGORIES ', () => {
    expect(URL_BEM_QUESTION_CATEGORIES).toEqual(
      LOCAL_URL_BEM_QUESTION_CATEGORIES,
    );
  });

  it('testing URL_BEM_QUESTIONS ', () => {
    expect(URL_BEM_QUESTIONS).toEqual(LOCAL_URL_BEM_QUESTIONS);
  });

  it('testing URL_CASHBACK_RULES ', () => {
    expect(URL_CASHBACK_RULES).toEqual(LOCAL_URL_CASHBACK_RULES);
  });

  it('testing URL_REGISTER_USER_CASHBACK ', () => {
    expect(URL_REGISTER_USER_CASHBACK).toEqual(
      LOCAL_URL_REGISTER_USER_CASHBACK,
    );
  });

  it('testing URL_SET_TOKEN_GENERATE ', () => {
    expect(URL_SET_TOKEN_GENERATE).toEqual(LOCAL_URL_SET_TOKEN_GENERATE);
  });

  it('testing URL_VALIDATE_SMS_TOKEN ', () => {
    expect(URL_VALIDATE_SMS_TOKEN).toEqual(LOCAL_URL_VALIDATE_SMS_TOKEN);
  });

  it('testing URL_GET_PROFILE_CASHBACK ', () => {
    expect(URL_GET_PROFILE_CASHBACK).toEqual(LOCAL_URL_GET_PROFILE_CASHBACK);
  });

  it('testing URL_CASHBACK_ACCEPTED_USER ', () => {
    expect(URL_CASHBACK_ACCEPTED_USER).toEqual(
      LOCAL_URL_CASHBACK_ACCEPTED_USER,
    );
  });

  it('testing URL_CASHBACK_TERMS ', () => {
    expect(URL_CASHBACK_TERMS).toEqual(LOCAL_URL_CASHBACK_TERMS);
  });

  it('testing URL_CASHBACK_TERMS_AGREE ', () => {
    expect(URL_CASHBACK_TERMS_AGREE).toEqual(LOCAL_URL_CASHBACK_TERMS_AGREE);
  });

  it('testing URL_CASHBACK_SERVICES ', () => {
    expect(URL_CASHBACK_SERVICES).toEqual(LOCAL_URL_CASHBACK_SERVICES);
  });

  it('testing URL_CASHBACK_ORDER_SERVICE ', () => {
    expect(URL_CASHBACK_ORDER_SERVICE).toEqual(
      LOCAL_URL_CASHBACK_ORDER_SERVICE,
    );
  });

  it('testing URL_REGISTER_QUESTION ', () => {
    expect(URL_REGISTER_QUESTION).toEqual(LOCAL_URL_REGISTER_QUESTION);
  });

  it('testing URL_REGISTER_QUESTION_EVALUATION ', () => {
    expect(URL_REGISTER_QUESTION_EVALUATION).toEqual(
      LOCAL_URL_REGISTER_QUESTION_EVALUATION,
    );
  });

  it('testing URL_BEM_FILTERED_QUESTIONS ', () => {
    expect(URL_BEM_FILTERED_QUESTIONS).toEqual(
      LOCAL_URL_BEM_FILTERED_QUESTIONS,
    );
  });

  it('testing URL_BEM_SET_TOKEN_ORDER ', () => {
    expect(URL_BEM_SET_TOKEN_ORDER).toEqual(LOCAL_URL_BEM_SET_TOKEN_ORDER);
  });

  it('testing URL_BEM_VALIDATE_TOKEN_ORDER ', () => {
    expect(URL_BEM_VALIDATE_TOKEN_ORDER).toEqual(
      LOCAL_URL_BEM_VALIDATE_TOKEN_ORDER,
    );
  });

  it('testing URL_APP_EVALUATION ', () => {
    expect(URL_APP_EVALUATION).toEqual(LOCAL_URL_APP_EVALUATION);
  });

  it('testing URL_FORGET_PASSWORD ', () => {
    expect(URL_FORGET_PASSWORD).toEqual(LOCAL_URL_FORGET_PASSWORD);
  });

  it('testing URL_TERMS_AND_POLITICS ', () => {
    expect(URL_TERMS_AND_POLITICS).toEqual(LOCAL_URL_TERMS_AND_POLITICS);
  });

  it('testing URL_DELIVERY_TIME ', () => {
    expect(URL_DELIVERY_TIME).toEqual(LOCAL_URL_DELIVERY_TIME);
  });

  it('testing URL_BRANCHES_AVAILABLE ', () => {
    expect(URL_BRANCHES_AVAILABLE).toEqual(LOCAL_URL_BRANCHES_AVAILABLE);
  });

  it('testing URL_VERSION_APP ', () => {
    expect(URL_VERSION_APP).toEqual(LOCAL_URL_VERSION_APP);
  });

  it('testing URL_CLIENT_RCA ', () => {
    expect(URL_CLIENT_RCA).toEqual(LOCAL_URL_CLIENT_RCA);
  });

  it('testing URL_MARKET_ANDROID ', () => {
    expect(URL_MARKET_ANDROID).toEqual(LOCAL_URL_MARKET_ANDROID);
  });

  it('testing URL_MARKET_IOS ', () => {
    expect(URL_MARKET_IOS).toEqual(LOCAL_URL_MARKET_IOS);
  });

  it('testing URL_FIND_CNPJ_DATA ', () => {
    expect(URL_FIND_CNPJ_DATA).toEqual(LOCAL_URL_FIND_CNPJ_DATA);
  });

  it('testing URL_CREATE_NEW_USER ', () => {
    expect(URL_CREATE_NEW_USER).toEqual(LOCAL_URL_CREATE_NEW_USER);
  });

  it('testing URL_SEND_TOKEN ', () => {
    expect(URL_SEND_TOKEN).toEqual(LOCAL_URL_SEND_TOKEN);
  });

  it('testing URL_VALIDATOR_TOKEN ', () => {
    expect(URL_VALIDATOR_TOKEN).toEqual(LOCAL_URL_VALIDATOR_TOKEN);
  });

  it('testing URL_UPDATE_PROFILE ', () => {
    expect(URL_UPDATE_PROFILE).toEqual(LOCAL_URL_UPDATE_PROFILE);
  });

  it('testing URL_CHANGE_PASSWORD ', () => {
    expect(URL_CHANGE_PASSWORD).toEqual(LOCAL_URL_CHANGE_PASSWORD);
  });

  it('testing URL_CHANGE_PASSWORD_DATA ', () => {
    expect(URL_CHANGE_PASSWORD_DATA).toEqual(LOCAL_URL_CHANGE_PASSWORD_DATA);
  });

  it('testing URL_ICMS ', () => {
    expect(URL_ICMS).toEqual(LOCAL_URL_ICMS);
  });
});
