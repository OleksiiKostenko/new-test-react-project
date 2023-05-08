import { useState } from 'react';
import css from './User.module.css';
import PropTypes from 'prop-types';
import { changeUsers } from '../../service/getQuery';

function User({ followers, avatar, tweets, following, id }) {
  const [followQuantity, setFollowQuantity] = useState(followers);
  const [btnState, setBtnState] = useState(following);

  const handelClick = () => {
    setBtnState(!btnState);
    btnState ? setFollowQuantity(followQuantity - 1) : setFollowQuantity(followQuantity + 1);
    changeUsers(id, followers, btnState);
  };

  return (
    <>
      <div className={css.img_wrapp}>
        <img className={css.img} src={avatar} alt="avatar" />
      </div>
      <ul className={css.text}>
        <li className={css.list_el}>
          <p>{tweets} Tweets</p>
        </li>
        <li className={css.list_el}>
          <p>{followQuantity.toLocaleString('en')} Followers</p>
        </li>
      </ul>
      {!btnState ? (
        <button
          style={{
            backgroundColor: '#EBD8FF',
          }}
          className={css.btn}
          type="button"
          onClick={handelClick}
        >
          FOLLOW
        </button>
      ) : (
        <button
          style={{
            backgroundColor: '#5CD3A8',
          }}
          className={css.btn}
          type="button"
          onClick={handelClick}
        >
          FOLLOWING
        </button>
      )}
    </>
  );
}

User.propTypes = {
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export default User;
