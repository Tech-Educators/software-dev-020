export default function Search() {
    function search(formData) {
      const query = formData.get("query");
      console.log(query)
    }
    return (
      <form action={search}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    );
  }