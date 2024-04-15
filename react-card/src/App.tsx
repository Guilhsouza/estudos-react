import Card from './components/Card.tsx';
import bee1 from './assets/abelha-3.jpg';
import bee2 from './assets/abelha-2.jpg';
import bee3 from './assets/abelha-1.jpg';

export default function App() {
  return (
    <>
      <Card title='Abelha 1' image={bee1} />
      <Card title='Abelha 2' image={bee2} />
      <Card title='Abelha 3' image={bee3} />
    </>
  )
}