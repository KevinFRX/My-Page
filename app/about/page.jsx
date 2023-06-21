import styles from './about.module.css'

export default function AboutPage () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About me</h1>
        <p>
          I am a Junior Web Developer with a passion for creating engaging and user-friendly web experiences. With a solid foundation in front-end development and a curiosity for learning new technologies, I am eager to contribute to dynamic projects and grow as a professional in the field.
        </p>
        <p>
          Collaboration and problem-solving are key strengths of mine. I thrive in team environments, where I can contribute my ideas, learn from others, and work together to achieve project goals. I am a proactive learner, always seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends and best practices.
        </p>
        <p>
          As a detail-oriented individual, I understand the importance of writing clean, maintainable code. I strive to follow coding standards and implement efficient solutions that are scalable and easily maintainable over time. I enjoy the process of identifying and fixing bugs, as it allows me to refine my problem-solving skills and ensure high-quality deliverables.
        </p>
        <p>
          With a strong foundation and a hunger for growth, I am excited to contribute my skills and enthusiasm to a dynamic and innovative team. I am eager to take on new challenges, learn from experienced professionals, and make a meaningful impact through my work as a Junior Web Developer.
        </p>
      </div>
      <div className={styles.background} />
    </div>
  )
}
