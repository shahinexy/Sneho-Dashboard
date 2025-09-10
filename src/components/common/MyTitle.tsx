const MyTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="md:text-3xl text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default MyTitle;
