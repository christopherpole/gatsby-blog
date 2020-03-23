import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default FieldWrapper;
