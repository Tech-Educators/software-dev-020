import { useState } from "react"

export default function ComplexForm() {
    const [formData, setFormData] = useState([])


    function handleChange(e) {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setFormData({
            // ...formData 'copies' over the previous value of formData into our new one
            ...formData,
            // the [e.target.name] is a dynamic object property - it looks at the input, so we can do {username: 'sam', creditcard: 0000011} for example.
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='userName' onChange={handleChange}  />
            <input name='password' onChange={handleChange}  />
            <input name='location' onChange={handleChange}  />
            <input name='age' onChange={handleChange}  />
            <input name='creditcard' onChange={handleChange} />
            <input name='mothers_birthday' onChange={handleChange} />
            <input name='bank' onChange={handleChange} />
            <input name='pet_name' onChange={handleChange}  />
            <button type="submit">submit</button>
        </form>
    )
}


/*

{
    userName: 'Sam',
    password: 'Hunter2',
    location: 'Liverpool',
}


*/


let key = 'username'

const myObject = {
    // username: 'SamRulez' 
    [key]: 'SamRulez',
    key: 'Thsisi my key!'
}


myObject.username // SamRulez