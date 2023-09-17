import styles from './page.module.css'
import { OkashiList } from './components/OkashiList'
import AutoComplete from './components/AutoComplete'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>お菓子検索</h1>
      <AutoComplete />
      <OkashiList />
    </main>
  )
}
