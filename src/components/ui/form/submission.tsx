import React from 'react';
import styled from 'styled-components';

import SubmitButton from 'src/components/ui/form/submitButton';

interface IProps {
  showConfirmation: boolean;
  isSubmitting: boolean;
}

const ConfirmationWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: opacity 500ms linear;
  transition-delay: 500ms;
  opacity: ${props => (props.isHidden ? '0' : '1')};
`;

const SubmitWrapper = styled.div`
  position: relative;
`;

const ConfirmationMessage = styled.p`
  color: green;
`;

const Submission = ({ showConfirmation, isSubmitting }: IProps) => (
  <SubmitWrapper>
    <ConfirmationWrapper aria-hidden={!showConfirmation} isHidden={!showConfirmation}>
      <ConfirmationMessage>Submitted!</ConfirmationMessage>
    </ConfirmationWrapper>

    <SubmitButton
      type="submit"
      disabled={isSubmitting}
      aria-hidden={showConfirmation}
      isHidden={showConfirmation}
    >
      Submit
    </SubmitButton>
  </SubmitWrapper>
);

export default Submission;
