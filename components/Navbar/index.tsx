import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'antd'

import { navs } from './config'
import styles from './index.module.scss'
import Login from 'components/Login'

const Navbar: NextPage = () => {
  const { pathname } = useRouter()
  const [isShowLogin, setIsShowLogin] = useState(false)

  const handleGotoEditorPage = () => {}
  const handleLogin = () => {
    setIsShowLogin(true)
  }
  const handleCloseLogin = () => {
    setIsShowLogin(false)
  }

  return (
    <div className={`container ${styles.navbar}`}>
      <section className={styles.logoArea}>BlOG</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a className={pathname === nav?.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button type='primary' onClick={handleLogin}>
          登录
        </Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleCloseLogin} />
    </div>
  )
}

export default Navbar
