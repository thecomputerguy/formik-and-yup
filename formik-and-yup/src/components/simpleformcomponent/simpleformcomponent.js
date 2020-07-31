
//lets convert this to react component
const simpleForm = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form>
    <div className="formRow">
        <label htmlFor="Email">Email:</label>
        <input type="email" name="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input type="password" value="" className="password" onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button type="submit">submit</button>
</form>
    )
}

export default simpleForm
