import Link from "next/link";

function Homepage(){
   let name = '김규태'
   return (
      <div>
       This is homepage
      <Link href={'/contacts'}>contacts 이동</Link> <br></br>
      <Link href={'/greet/'+ name}> {name} 이동</Link>
      <Link ref={{
         pathname:'greet/[name]',
         name:'happy-new-year',
         foo:'bar'
      }}> greet/{name}?foo=bar 이동</Link>
      </div>
   )
}
export default Homepage;