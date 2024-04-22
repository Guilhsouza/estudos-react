import Profile from './components/Profile.tsx'
import image from './images/zoro-image.jpg'

export default function App() {

  return (
    <div className='app'>
      <Profile
        avatar={image}
        name='Guilherme Souza'
        bio='Fullstack Javascript Developer'
        email='gui.edu0380@gmail.com'
        phone='(12) 99111-2772'
        githubUrl='https://github.com/Guilhsouza'
        linkedinUrl='https://www.linkedin.com/in/guilhrme-souza'
        facebookUrl='https://www.facebook.com' />
    </div>
  )
}
