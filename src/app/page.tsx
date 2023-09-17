import styles from './page.module.css'
import { OkashiList } from './components/OkashiList'

export default function Home() {
  return (
    <main className={styles.main}>
      <OkashiList />
    </main>
  )
}
