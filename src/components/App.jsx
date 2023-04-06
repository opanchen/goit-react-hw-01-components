import user from "user.json"
import data from "data.json"
import friends from "friends.json"
import transactions from "transactions.json"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// console.log(transactions);

export const App = () => {
  return (
    <>
    {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */}
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    <FriendList
    friends = {friends}
    />
    <Statistics
    title = 'Upload stats'
    stats = {data}
    />
    <TransactionHistory
    items= {transactions}
    />
    </>
  );
};