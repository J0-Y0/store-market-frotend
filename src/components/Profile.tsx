import * as React from "react";
import {
  Account,
  AuthenticationContext,
  SessionContext,
  Session,
} from "@toolpad/core";

import { useAuth } from "../context/auth/authProvider";
import { User } from "../context/auth/types";
const { user, setUser, logout } = useAuth();

export default function Profile() {
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setUser(user);
      },
      signOut: () => {
        setUser(null);
        logout();
      },
    };
  }, []);

  return <Account />;
}
