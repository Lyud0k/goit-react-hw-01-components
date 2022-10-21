import { ShortBiography } from "components/ShortBiography/ShortBiography";
import { Grade } from "components/Grade/Grade";
import user from '../../../src/user.json';
import css from '../Profile/Profile.module.css';

export const Profile = () => {
    return (
        <div className={css.bixy}>
                  <ShortBiography
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar} />
      
      <Grade
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
        </div>
    )
}