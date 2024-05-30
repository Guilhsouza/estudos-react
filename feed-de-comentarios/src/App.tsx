import ComentsSection from "./components/ComentsSection";
import useComentsCollection from "./hooks/useComentsCollection";
import RenderList from "./components/RenderList";

export default function App() {
  const { comentsList, addComent } = useComentsCollection()

  return (
    <div className="app">
      <ComentsSection addComent={addComent} />

      <div className="coments">
        {
          comentsList.map((uniqueComent) => {
            return (
              <RenderList
                email={uniqueComent.email}
                coment={uniqueComent.coment} />
            )
          })
        }
      </div>
    </div>
  )
}


