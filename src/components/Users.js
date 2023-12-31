import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  // Search Params
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUers = searchParams.get('filter') === 'active'

  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUers ? <h2>show active users</h2> : <h2>showing all users</h2>
      }
    </div>
  );
};

export default Users;
