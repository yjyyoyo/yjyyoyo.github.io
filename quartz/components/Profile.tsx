import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Profile: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "profile-card")}>
      <img src="https://github.com/yjyyoyo.png" alt="头像" class="profile-avatar" />
      <h2 class="profile-name">YoYo</h2>
      <p class="profile-bio">升级打怪之路</p>
      <div class="profile-links">
        <a href="mailto:yanjieyi0421@163.com">✉️ Email</a>
        <a href="https://github.com/yjyyoyo" target="_blank">💻 GitHub</a>
      </div>
    </div>
  )
}

Profile.css = `
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--light); /* 👈 适配深浅色模式 */
  border: 1px solid var(--lightgray); /* 加个极淡的边框更精致 */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* 改用纯黑低透明度阴影 */
  margin-top: 2rem;
}
.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid var(--lightgray);
}
.profile-name {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--dark);
}
.profile-bio {
  margin: 0 0 1.2rem 0 !important;
  font-size: 0.9rem;
  color: var(--gray);
  text-align: center;
  line-height: 1.5;
}
.profile-links {
  display: flex;
  gap: 1.2rem;
}
.profile-links a {
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--secondary);
  font-weight: bold;
  transition: opacity 0.2s ease;
}
.profile-links a:hover {
  opacity: 0.7;
}
`

export default (() => Profile) satisfies QuartzComponentConstructor