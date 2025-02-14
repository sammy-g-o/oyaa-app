/* eslint-disable react/prop-types */
function IconInput({ children, placeholder, type }) {
  return (
    <div className="wrap">
      <div className="icon-wrap">{children}</div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
export default IconInput;
