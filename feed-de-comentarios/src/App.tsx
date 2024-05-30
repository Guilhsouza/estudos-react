import ComentsSection from "./components/ComentsSection";
import useComentsCollection from "./hooks/useComentsCollection";
import RenderList from "./components/RenderList";

export default function App() {
  const { comentsList, addComent } = useComentsCollection()

  return (
    <div id="app">
      <ComentsSection addComent={addComent} />

      <div className="coments">
        {
          comentsList.map((uniqueComent) => {
            return (
              <RenderList
                key={Math.random() * 10000000000}
                email={uniqueComent.email}
                coment={uniqueComent.coment} />
            )
          })
        }
      </div>
    </div>
  )
}


