import { Bars } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="loader">
<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>
  )
}
export default Loader