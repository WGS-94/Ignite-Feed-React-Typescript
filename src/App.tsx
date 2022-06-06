import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import styles from './App.module.css'

import './globalStyle.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/HVDgeek.png",
      name: "Hiduino Domingos",
      role: "CTO | NAFAU"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "hvdGeek.design/nafauWeb"}
    ],
    publishedAt: new Date('2022-06-03 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/WGS-94.png",
      name: "Wilson Dos Santos",
      role: "Desenvolvedor | NAFAU"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "wilson.design/nafauLabs"}
    ],
    publishedAt: new Date('2022-06-03 10:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <SideBar />
        <main>
          {posts.map((post) => {
              return (
              <Post 
                key={post.id}
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
