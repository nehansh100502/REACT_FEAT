import { useState } from 'react'
import SearchBar from '../components/searchBar.jsx'
import Sorting from '../components/sorting.jsx'
import Pagination from '../components/pagination.jsx'
import usePosts from '../hooks/usePosts.js'
import { useDebounce } from '../hooks/useDebounce.js'

const Dashboard = () => {

    const [query, setQuery] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [skip, setSkip] = useState(0)

    //! debounced query 
    let debouncedQuery = useDebounce(query, 2000)


    //! calling custom hooks using state varible 
    let { posts, loading } = usePosts({ query: debouncedQuery, sortBy, skip })
    console.log("query:", query);
    console.log("debouncedQuery:", debouncedQuery); return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    My Dashboard
                </h1>
                <p className="text-gray-500 mt-2">
                    Welcome to my dashboard 👋
                </p>
                {/* <serach bar */}
                <SearchBar query={query} setQuery={setQuery} />
                {/* <sorting> */}

                <Sorting sortBy={sortBy} setSortBy={setSortBy} />


            </div>


            {/* display post from API */}

            {loading ? <p>Loading..</p> : <>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <table className="min-w-full text-left border-collapse">

                        {/* Header */}
                        <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                            <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Views</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="text-gray-600">
                            {posts.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={`border-b hover:bg-gray-100 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        }`}
                                >
                                    <td className="px-6 py-4 font-medium">{item.id}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4 text-blue-600 font-semibold">
                                        {item.views}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                {/* pagination */}
                <Pagination skip={skip} setSkip={setSkip} />

            </>}
        </div>
    )
}

export default Dashboard