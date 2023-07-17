import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"

const PageRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes