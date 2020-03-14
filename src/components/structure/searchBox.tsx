import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Input from 'src/components/ui/form/input';

const QuerySchema = Yup.object().shape({
  query: Yup.string().required('Required'),
});

const Wrapper = styled.div``;

const SearchBox = () => {
  const onSubmit = ({ query }: { query: string }) => {
    navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <Wrapper>
      <Formik initialValues={{ query: '' }} validationSchema={QuerySchema} onSubmit={onSubmit}>
        {({ errors, handleSubmit, values }) => (
          <Form role="search" onSubmit={handleSubmit}>
            <Input component="input" type="text" name="query" haserror={errors.query} />
            <Link to={`/search/${encodeURIComponent(values.query)}`}>Search</Link>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SearchBox;
