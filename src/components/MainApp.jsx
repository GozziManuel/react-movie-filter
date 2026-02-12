export default function MainApp({ films }) {
  return (
    <>
      {films.map((element) => {
        <ul>
          <li>{element.title}</li>
          <li>{element.genre}</li>
        </ul>;
      })}
    </>
  );
}
