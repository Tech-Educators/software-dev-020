import ServerComponent from "@/components/ServerComponent"
import ClientComponent from "@/components/ClientComponent"
import Example from "@/components/Example"
import ClientComponentThatTakesChildren from "@/components/ClientComponentThatTakesChildren"
import Search from "@/components/FormAction"

export default function Home() {
  return (
    <div>
      {/* By defaut, all components are server components */}
      <ServerComponent />      
      {/* runns on the server */}
      <Example />

    {/* This one runs on the client */}
      <ClientComponent />

{/* clientComponentthattakes children runs on the client - but it's child <Example />, runs on the server jsut fine*/}
      <ClientComponentThatTakesChildren>
        {/* using a server component as a child prop is totally fine - it won't turn into a client component */}
        <Example />
      </ClientComponentThatTakesChildren>
      <Search />
    </div>
  )
}