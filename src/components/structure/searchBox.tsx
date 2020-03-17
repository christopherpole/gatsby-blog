import React from 'react';
import { Link, navigate } from 'gatsby';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import buttonStyles from 'src/theme/styles/button';
import Input from 'src/components/ui/form/input';

const QuerySchema = Yup.object().shape({
  query: Yup.string().required('Required'),
});

const Wrapper = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  margin: 0;
`;

const StyledInput = styled(Input)`
  margin-bottom: 0;
  padding-left: 1rem;
  border-right: none;
`;

const StyledLink = styled(Link)<{ disabled: boolean }>`
  ${buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.primary};

  ${props =>
    props.disabled &&
    css`
      border-color: #ccc;
    `}
`;

const SearchBox = () => {
  const onSubmit = ({ query }: { query: string }) => {
    navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <Wrapper>
      <Formik initialValues={{ query: '' }} validationSchema={QuerySchema} onSubmit={onSubmit}>
        {({ handleSubmit, values }) => (
          <Form role="search" onSubmit={handleSubmit}>
            <InputWrapper>
              <StyledInput component="input" type="text" name="query" />
              <StyledLink
                to={`/search/${encodeURIComponent(values.query)}`}
                disabled={!values.query.length}
              >
                <FontAwesomeIcon icon={faSearch} />
              </StyledLink>
            </InputWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SearchBox;
