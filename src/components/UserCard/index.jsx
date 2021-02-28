const UserCard = (props) => {
  const { user } = props;
  return (
    <>
      <img src={user.imageSrc} alt={`${user.firstName} ${user.lastName}`} />
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};

export default UserCard;
