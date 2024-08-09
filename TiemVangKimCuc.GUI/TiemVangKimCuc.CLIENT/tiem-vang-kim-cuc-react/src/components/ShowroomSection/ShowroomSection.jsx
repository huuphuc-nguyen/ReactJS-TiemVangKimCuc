import ShowroomChild from "./ShowroomChild"
import { useGetListCategoriesQuery } from "../../features/api/apiSlice";

// This component contains 5 titles of categories, each tiltles will render a number of products

const ShowroomSection = () => {
    const {data:categories, isLoading} = useGetListCategoriesQuery();

  return (
    !isLoading ? categories.map(cat => <ShowroomChild key={cat.id} category={cat} /> ) : null
  )
}

export default ShowroomSection
