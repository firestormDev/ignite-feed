import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
    
     <div className={styles.wrapper}>
      <Sidebar/>

      <main>
        <Post author="luiz" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptas aspernatur quidem ipsum. Culpa, earum praesentium omnis aut laboriosam modi delectus, sed consectetur sint ipsum quidem eveniet, animi itaque similique."
        />
        <Post author="Gabriel" 
        content="teste."
        />
      </main>
     </div>
    </div>
  )
}

