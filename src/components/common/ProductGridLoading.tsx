const ProductGridLoading = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="skeleton aspect-6/11 rounded-5xl"></div>
        <div className="skeleton aspect-6/11 rounded-5xl"></div>
        <div className="skeleton aspect-6/11 rounded-5xl"></div>
        <div className="skeleton aspect-6/11 rounded-5xl"></div>
      </div>
    </>
  );
};

export default ProductGridLoading;
