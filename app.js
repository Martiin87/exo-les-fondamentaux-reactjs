class App extends React.Component {
    state = {
        comments: []
    }
   
    render() {

    return (
        <div className="forms">
       <h1>Say something</h1>
       <form> 
            <input className="form-name" type="text" value="Your Name"/>
            <input className="form-comment" type = "text" value="Your Comment"/>
            <input className="form-submit" type="submit" value="Comment"/>

       </form>
       </div>
    )
}

}
   


ReactDOM.render(<App/>, document.getElementById('app'));