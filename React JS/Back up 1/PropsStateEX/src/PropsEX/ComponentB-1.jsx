let CompB = (props) => {
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h1>Name:{props.ename}</h1>
    </div>
}
export default CompB