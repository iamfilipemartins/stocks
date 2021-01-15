import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { operations } from '../redux';
import Info from '../../../shared/components/info';

import { ERROR_NOT_FOUND } from '../../../shared/constants';
import {
  Container,
  CompanyContainer,
  GraphicContainer,
  AboutContainer,
  InfoContainer,
  Title,
  Text,
  CompanyPresentContainer,
  Image,
  CompanyDescriptionContainer,
  CompanyDataContainer,
  LoadingContainer
} from './styles';
import Graphic from '../../../shared/components/graphic/views/Graphic';
import { colors } from '../../../shared/colors';
import Accordion from '../../../shared/components/accordion';
import { infoExbhitionNames } from '../enum';
import Loading from '../../../assets/svg/Loading';

const Company = ({
  company,
  latestPrice,
  companyData,
  graphicData,
  companyLogo,
  getLatestPrice,
  getGraphicData,
  getCompanyData,
  getCompanyLogo,
}) => {

  const [loading, setLoading] = useState(false);

  const getCompanyInfo = async () => {
    setLoading(true);
    await getCompanyData(company);
    await getLatestPrice(company);
    await getGraphicData(company);
    await getCompanyLogo(company);
    setLoading(false);
  };

  useEffect(() => {
    if(company && company !== '') getCompanyInfo();
  }, [company]);

  const renderGraphic = () => {
    const lines = [
      { dataKey: "close", color: colors.blueRoyal },
    ]
    return (
      <GraphicContainer>
        <Accordion title="Graphic">
          <Graphic 
            data={graphicData}
            dataKeyXAxis="label"
            lines={lines}
          />
        </Accordion>
      </GraphicContainer>
    )
  };

  const renderInfo = () => Object.entries(companyData).map(([key, value]) => {
    if (key && value && infoExbhitionNames[key]) {
      if(key === 'website') {
        return <Info title={infoExbhitionNames[key]} text={value} link/>
      }
      return <Info title={infoExbhitionNames[key]} text={value}/>
    }
    return null;
  });

  if(loading){
    return (
      <Container>
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      </Container>
    )
  }

  console.log(company)

  return (
    <Container>
      {(company && latestPrice) ? (
        <CompanyContainer>
          {companyData ? (
            <CompanyDataContainer>
              <CompanyPresentContainer>
              {companyLogo && <Image width={80} height={80} src={companyLogo.url} />}
                <CompanyDescriptionContainer>
                  <Title>
                    {companyData.companyName}
                  </Title>
                  <Text>
                    {`Latest Price: USD ${latestPrice}`}
                  </Text>
                </CompanyDescriptionContainer>
              </CompanyPresentContainer>
              <AboutContainer>
                <Accordion title="About">
                  <InfoContainer>
                    {renderInfo()}
                  </InfoContainer> 
                </Accordion>
              </AboutContainer>
              { graphicData && renderGraphic()}
              </CompanyDataContainer>
          ) : (
            <Text>
              {ERROR_NOT_FOUND}
            </Text>
          )}
        </CompanyContainer>
      ) : null}
    </Container>
  );
};


const mapStateToProps = (state) => ({
  company: state.companyReducer.company,
  latestPrice: state.companyReducer.latestPrice,
  companyData: state.companyReducer.companyData,
  graphicData: state.companyReducer.graphicData,
  companyLogo: state.companyReducer.companyLogo,
});

const mapDispatchToProps = {
  getLatestPrice: operations.getLatestPrice,
  getGraphicData: operations.getGraphicData,
  getCompanyData: operations.getCompanyData,
  getCompanyLogo: operations.getCompanyLogo,
};

export default compose(connect(mapStateToProps,mapDispatchToProps))(Company);
