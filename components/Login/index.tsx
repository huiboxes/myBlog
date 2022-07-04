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
    password: '',
  })

  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false)
  const [loginType, setLoginType] = useState('password')

  const handleClose = () => {
    onClose && onClose()
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

  const switchLoginType = () => {
    setLoginType((loginType) => {
      return loginType === 'password' ? 'phoneVerifyCode' : 'password'
    })
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
          <div>{loginType === 'password' ? '账号登录' : '手机号登录'}</div>
          <div className={styles.closeButton} onClick={handleClose}>
            x
          </div>
        </div>

        <input
          type='text'
          name='phone'
          placeholder={loginType === 'password' ? '账号登录' : '手机号登录'}
          value={form.phone}
          onChange={handleFormChange}
        />

        {loginType === 'password' ? (
          <input
            type='password'
            name='password'
            placeholder='请输入密码（没有账号将自动注册）'
            value={form.password}
            onChange={handleFormChange}
          />
        ) : (
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
        )}

        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>

        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          <span>使用Github登录</span>
          <span onClick={switchLoginType}>
            使用{loginType === 'password' ? '手机号登录' : '密码登录'}
          </span>
        </div>

        <div className={styles.loginPrivacy}>
          注册登录即表示同意
          <a href='/privacy.html' target='_blank' rel='noreferrer'>
            隐私协议
          </a>
        </div>
      </div>
    </div>
  ) : null
}

export default Login
