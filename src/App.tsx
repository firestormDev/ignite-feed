import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'

// author : { avatar_url: " ", name: "", role:"",}
// publishedAt: Date
// content: String

const posts= [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/firestormdev.png',
      name: 'Luiz Tinti',
      role: 'Web Developer'
    },

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design / doctorcare'},
    ],

    publishedAt: new Date('2024-03-26 20:00:01'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/thiagol1r4.png',
      name: 'Thiago Nobre',
      role: 'Senior Developer'
    },

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design / doctorcare'},
    ],

    publishedAt: new Date('2023-02-03 20:00:01'),

  },
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}

