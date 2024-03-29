import React, { useEffect, useReducer } from "react";
import axios from "axios";

// setState 밖에 있으니깐 외부에서 사용가능!
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" }); // rerender trigger => 내부에 useState
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users" // rerender trigger => 내부에 useState
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: "Error", error: e });
    }
  };

  // 이러면 감지하는 값이 없어서 처음 mount 시에만 발동함
  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  console.log(users);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          );
        })}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
}
