const UserCard = (props) => {
  const { user } = props;
  return (
    <>
      <img src={user.image_src} alt={`${user.first_name} ${user.last_name}`} />
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};

export default UserCard;
