import {useState} from "react"

export default function AnimalForm() {
    const [form, setForm] = useState({})

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`http://localhost:8080/animals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form) 
            })
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    function handleChange(event) {
        console.log(event.target.value)
        console.log({[event.target.name]: event.target.value})

        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="name" onChange={handleChange} required />
            <input name="description" placeholder="desc" onChange={handleChange} required />
            <input name="scientfic_name" placeholder="scientfic_name" onChange={handleChange} required />
            <input name="image" placeholder="image" onChange={handleChange} required />
            <button type="submit">submit form</button>
        </form>
    )
}

// 1. run handleChange whenever the user typed in the inputs in the form


/*

{
    "name": "Capybara",
    "description": "These impressive semi-aquatic mammals are found throughout much of northern and central South America, though a small invasive population has been seen in Florida. They’re closely related to guinea pigs and rock cavies, and more distantly related to chinchillas and agouti. Like beavers, capybaras are strong swimmers. Their pig-shaped bodies are adapted for life in bodies of water found in forests, seasonally flooded savannas, and wetlands. ", 
    "scientfic_name":  "Hydrochoerus hydrochaeris", 
    "image": "https://www.drusillas.co.uk/media/image/6-6968.png"
}

*/



