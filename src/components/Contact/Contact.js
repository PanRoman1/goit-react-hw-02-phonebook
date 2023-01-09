export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};
