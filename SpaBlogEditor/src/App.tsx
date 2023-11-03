import Blog from './pages/blog/page'

import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
import Preview from './pages/preview/page'
import NewBlog from './pages/newPost/page'


const router = createBrowserRouter(
	
	createRoutesFromElements(

		<Route path='/' >
			<Route path='home' element={<Blog/>}></Route>
			<Route path="pages/newPost" element={<NewBlog/>}></Route>
			<Route path="/newCategories"></Route>
			<Route path="/newBlog"></Route>
			<Route path="/newBlogger"></Route>
			<Route path="/newPage"></Route>
			<Route path="/edit"></Route>
			<Route path="/edit"></Route>
			<Route path="/edit"></Route>
			<Route path="/edit"></Route>
			<Route path="/edit"></Route>
			<Route path="/edit"></Route>
			<Route path="/view"></Route>
			<Route path='/post'></Route>
			<Route path="/overview" element={<Preview/>}></Route>
			<Route ></Route>
			<Route></Route>
			
		</Route>
	)
)


function App() {

  return (

		<RouterProvider router={router}/>

  )
}

export default App
