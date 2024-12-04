import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { useUser } from '../../features/authentication/userUser';
import { useNavigate } from 'react-router';
import FullPage from '../../ui/FullPage';
import Spinner from '../../ui/Spinner';
import { AuthContext } from '../../context/GlobalContext';
import { useQueryClient } from '@tanstack/react-query';

interface IProps {
  children: React.ReactNode;
}
const LayoutApp: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { data, isLoading, isAuthenticated, isFetching } = useUser();

  // useEffect(() => {
  //   if(!isAuthenticated && !isFetching) {
  //     navigate('/login');
  //   }

  //   console.log('Change', isAuthenticated, isFetching);

  // }, [isAuthenticated, isFetching]);

  if (isLoading) {
    return (
      <FullPage>
        <Spinner size={50} />
      </FullPage>
    )
  }

  if(!isAuthenticated && !isFetching) {
    navigate('/login');
  }

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default LayoutApp;
