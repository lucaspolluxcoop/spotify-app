export function Pagination({ pagination, setPagination, elements, className }) {
  const firstPage = pagination.page === 1;
  const lastPage =
    pagination.page === Math.ceil(pagination.total / pagination.perPage);

  const handlePreviousPage = () => {
    if (firstPage) return;
    setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  const handleNextPage = () => {
    if (lastPage) return;
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  return (
    <>
      <div className={`my-5 ${className || ""}`}>
        <span className="text-lg font-semibold text-green-600">
          Showing {elements.length} of {pagination.total}
        </span>
        <div className="flex justify-center items-center gap-3 w-full mt-3">
          <span
            onClick={handlePreviousPage}
            disabled={firstPage}
            className="grow bg-green-600 text-black font-semibold rounded-lg py-1 px-3 cursor-pointer disabled:opacity-50"
          >
            {"<"}
          </span>
          <span className="grow bg-green-600 text-black font-semibold rounded-lg py-1 px-3 cursor-pointer">
            {pagination.page}
          </span>
          <span
            onClick={handleNextPage}
            disabled={lastPage}
            className="grow bg-green-600 text-black font-semibold rounded-lg py-1 px-3 cursor-pointer disabled:opacity-50"
          >
            {">"}
          </span>
        </div>
      </div>
    </>
  );
}
