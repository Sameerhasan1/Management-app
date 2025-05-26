import Navbar from './Navbar';

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="p-4">{children}</div>
    </>
  );
};

export default ProtectedLayout;
