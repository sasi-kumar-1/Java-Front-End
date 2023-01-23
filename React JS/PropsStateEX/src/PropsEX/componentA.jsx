import CompB from './CompB'
let CompA = () => {
    let name = "Rahul Gandhi"
    let avail = "true"
    return <div>
        <h1>Component A</h1>
        <hr />
        {/*  <CompB props1={"GM"} props2={name} props3={"GN"} /> */}
        <CompB ename={name} esal={45000} avail={avail} />
    </div>
}
export default CompA