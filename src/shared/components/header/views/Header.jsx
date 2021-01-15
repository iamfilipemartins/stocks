import React, { useState } from 'react';
import TextInput from '../../textInput';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {operations as operationsCompany} from '../../../../features/company/redux';

import {
  SearchContainer,
  Title,
  Container,
  AppbarContainer,
  StockContainer,
  StockIcon,
} from './styles';
import Button from '../../button';
import { useWindowDimensions } from '../../../utils';

export const Header = ({
  setCompany,
  title,
}) => {

  const { width } = useWindowDimensions();

  const [search, setSearch] = useState('');

  const handleOnPressButton = () => {
    setCompany(search);
  };

  return (
    <Container>
      <AppbarContainer width={width}>
        <StockContainer width={width}>
          <StockIcon />
          <Title>{title}</Title>
        </StockContainer>
        <SearchContainer width={width}>
          <TextInput
            value={search.toUpperCase()} 
            onChange={setSearch}
            placeholder="Company symbol"
            transparent
          />
          <Button 
            icon="search" 
            onClick={handleOnPressButton}
          />
        </SearchContainer>
      </AppbarContainer>
    </Container>
  );
};

const mapDispatchToProps = {
  setCompany: operationsCompany.setCompany,
};

export default compose(connect(null, mapDispatchToProps))(Header);
  
