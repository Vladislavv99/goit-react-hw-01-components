import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import friends from "./FriendList/friends.json"
import users from "./Profile/user.json"
import data from "./Statistics/data.json"
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
        stats={users.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
