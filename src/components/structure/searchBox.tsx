import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import buttonStyles from 'src/theme/styles/button';
import Input from 'src/components/ui/form/input';
import Label from 'src/components/ui/form/label';

const QuerySchema = Yup.object().shape({
  query: Yup.string(),
});

const Wrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 0;
`;

const StyledLabel = styled(Label)`
  display: none;
`;

const StyledInput = styled(Input)`
  margin-bottom: 0;
  padding-left: 1rem;
  border-right: none;
`;

const StyledSubmitButton = styled.button`
  ${buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.extraSmall};
  transition-property: border-color, background-color;
`;

interface IProps {
  className?: string;
  onSearch?: () => void;
}

const SearchBox = ({ className, onSearch }: IProps) => {
  const onSubmit = ({ query }: { query: string }) => {
    navigate(`/search/${encodeURIComponent(query)}`);

    if (onSearch) {
      onSearch();
    }
  };

  return (
    <Wrapper className={className}>
      <Formik initialValues={{ query: '' }} validationSchema={QuerySchema} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <Form role="search" onSubmit={handleSubmit}>
            <InputWrapper>
              <StyledLabel htmlFor="search-query">Search query</StyledLabel>
              <StyledInput id="search-query" component="input" type="text" name="query" />
              <StyledSubmitButton type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </StyledSubmitButton>
            </InputWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SearchBox;
