import styles from './home.module.css'
import Image from 'next/image'

export default function HomePage () {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Hi!</h1>
          <h1>I'm Kevin,</h1>
          <h1>Web Developer</h1>
        </div>
        <div className={styles.profilePicture}>
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.homeWallpaper}>
        <Image
          src="/home-wallpaper.jpg"
          alt="Home Wallpaper"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )
}
