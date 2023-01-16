import {Profile} from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'

import user from '../../data/user.json';
import data from '../../data/data.json';
console.log(Statistics)
console.log(data)


export const App = () => {
    return (
      <div>
      <div>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      </div>
      <Statistics title="Upload stats" stats={data} />
      </div>

    );
  };

