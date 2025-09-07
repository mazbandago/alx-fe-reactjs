import Navbar from "../Navbar";
function Home() {
     return (
        <>
        <Navbar />
       <div style={{ padding: '20px' }}>
         <h1 style={{fontSize:"2rem", textAlign:"center", marginBottom:"10px"}}>Welcome to Our Company</h1>
         <p>We are dedicated to delivering excellence in all our services.</p>
       </div>
        </>
     );
   }

   export default Home;