export default function Layout({children}) {
    return (
        <div>
            <h2>This wraps all the pages in the /dogs route</h2>
            {children}
        </div>
    )
}