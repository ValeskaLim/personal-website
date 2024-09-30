import Header from "./components/Header";
import Profile from "./components/Profile";
import Container from "./components/Container";
import About from "./components/About";
import Project from "./components/Project";
import Stack from "./components/Stack";

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center p-7 duration-300 dark:bg-black dark:duration-300">
      <>
        <Container>
          <Header />
          <Profile />
          <About />
          <Project />
          <Stack />
        </Container>
      </>
    </div>
  );
}

export default App;