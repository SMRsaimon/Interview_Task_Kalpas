export const pageNumber = (pages, currentPage, setCurrentPage) => {
  return (
    <>
      {pages.map((number) => (
        <li
          key={number}
          id={number}
          onClick={(e) => setCurrentPage(Number(e.target?.id))}
          className={currentPage === number ? 'activePage' : null}
        >
          {number}
        </li>
      ))}
    </>
  );
};
