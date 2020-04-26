import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageWrapper, ButtonWrapper } from './not-found.styled';
import PageTitle from 'components/PageTitle';
import PageSubtitle from 'components/PageSubtitle';
import BaseButton from 'components/BaseButton';

const NotFound = () => {
  let history = useHistory();

  const goToHomepage = () => {
    history.push('/user-app');
  };

  return (
    <PageWrapper>
      <PageTitle size="large" title="Oops!" />
      <PageSubtitle
        size="large"
        title="We can't find the page you're looking for."
      />
      <ButtonWrapper>
        <BaseButton
          label="Visit homepage"
          onClick={goToHomepage}
          appearance="primary"
        />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default NotFound;
