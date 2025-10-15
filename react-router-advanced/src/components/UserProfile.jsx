import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h3>User Profile</h3>
      <p>Viewing profile for user ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
