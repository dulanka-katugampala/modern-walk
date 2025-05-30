const ProductGridLoading = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div className="skeleton aspect-6/9 rounded-primary"></div>
        <div className="skeleton aspect-6/9 rounded-primary"></div>
        <div className="skeleton aspect-6/9 rounded-primary"></div>
        <div className="skeleton aspect-6/9 rounded-primary"></div>
      </div>
    </>
  );
};

export default ProductGridLoading;
