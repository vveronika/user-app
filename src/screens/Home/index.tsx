import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';
import { PageHeaderWrapper, LoaderWrapper } from './home.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from 'models/rootState';
import { fetchUsers } from 'redux/actions';
import { User } from 'models/user';
import ListWrapper from 'components/ListWrapper';
import PageTitle from 'components/PageTitle';
import PageSubtitle from 'components/PageSubtitle';
import { theme } from 'app.styled';
import Loader from 'components/Loader';
toast.configure();

interface Props {
  fetchUsers: () => void;
  users: User[];
  history: History;
  fetchError: boolean;
  loading: boolean;
}

const Home: React.FC<Props> = (props) => {
  const { fetchUsers, users, fetchError, loading } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchError &&
      toast.error("Sorry! Couldn't fetch your users at the moment.");
  }, [fetchError]);

  const showDeleteUserError = () => {
    toast.error('Sorry! Removing users is not available at the moment.');
  };

  if (loading && users.length === 0) {
    return (
      <LoaderWrapper>
        <Loader color={theme.greenPrimary} size={100} />
      </LoaderWrapper>
    );
  }
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle title="Your users list" />
        <PageSubtitle title="Click on user to get some details" />
      </PageHeaderWrapper>
      <ListWrapper items={users} onDelete={showDeleteUserError} />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const users = state.users.users;
  const fetchError = state.users.fetchError;
  const loading = state.users.loading;
  return {
    users,
    fetchError,
    loading,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
