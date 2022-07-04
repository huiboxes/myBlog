import { ChangeEvent, useState } from 'react'
import styles from './login.module.scss'
import CountDown from 'components/CountDown'

interface ILoginProps {
  isShow: boolean;
  onClose: Function;
}

const Login = ({ isShow = false, onClose }: ILoginProps) => {
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  })

  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false)

  const handleClose = () => {
    onClose()
    setIsShowVerifyCode(false)
  }
  const handleGetVerifyCode = () => {
    setIsShowVerifyCode(true)
  }
  const handleLogin = () => {}
  const handleOAuthGithub = () => {}
  const handleClickPage = (e: any) => {
    if (e.target.id === 'loginArea') {
      onClose()
      setIsShowVerifyCode(false)
    }
  }

  const handleCountDownEnd = () => {
    setIsShowVerifyCode(false)
  }
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return isShow ? (
    <div className={styles.loginArea} onClick={handleClickPage} id='loginArea'>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>手机号登录</div>
          <div className={styles.closeButton} onClick={handleClose}>
            x
          </div>
        </div>

        <input
          type='text'
          name='phone'
          placeholder='请输入手机号'
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            type='text'
            name='verify'
            placeholder='请输入验证码'
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyGetter} onClick={handleGetVerifyCode}>
            {isShowVerifyCode ? (
              <CountDown time={60} onEnd={handleCountDownEnd} />
            ) : (
              '获取验证码'
            )}
          </span>
        </div>

        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>

        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          使用Github登录
        </div>

        <div className={styles.loginPrivacy}>
          注册登录即表示同意
          <a
            href='https://moco.imooc.com/privacy.html'
            target='_blank'
            rel='noreferrer'
          >
            隐私协议
          </a>
        </div>
      </div>
    </div>
  ) : null
}

export default Login
