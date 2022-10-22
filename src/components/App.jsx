import { Profile } from 'components/Profile/Profile';
import user from '../../src/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />

      {/* <ShortBiography
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar} />
      
      <Grade
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/> */}
    </div>
  );
};
