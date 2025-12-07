import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ChapterList = [
  {
    id: 'intro',
    title: '📚 Textbook Overview',
    description: 'Course introduction, modules, hardware requirements, and learning objectives',
    link: '/intro',
    color: 'var(--ifm-color-primary)',
  },
  {
    id: 'chapter1',
    title: '🤖 Module 1: Humanoid Fundamentals',
    description: 'Robot anatomy, kinematics, dynamics, stability control, and bipedal locomotion',
    link: '/chapter1',
    color: '#4CAF50',
  },
  {
    id: 'chapter2',
    title: '⚡ Module 2: ROS 2 System',
    description: 'ROS 2 architecture, nodes, topics, URDF, and Python integration for robotics',
    link: '/chapter2',
    color: '#2196F3',
  },
  {
    id: 'chapter3',
    title: '🌐 Module 3: Digital Twins',
    description: 'Gazebo simulation, Unity HRI, sensor simulation, and physics modeling',
    link: '/chapter3',
    color: '#9C27B0',
  },
  {
    id: 'chapter4',
    title: '🧠 Module 4: AI-Robot Brain',
    description: 'NVIDIA Isaac Sim, VSLAM navigation, reinforcement learning, sim-to-real',
    link: '/chapter4',
    color: '#FF9800',
  },
  {
    id: 'chapter5',
    title: '🎤 Module 5: VLA Systems',
    description: 'Whisper voice commands, LLM task planning, multimodal AI integration',
    link: '/chapter5',
    color: '#F44336',
  },
  {
    id: 'chapter6',
    title: '🔧 Module 6: Hardware Lab',
    description: 'RTX workstations, Jetson kits, robot platforms, cloud vs on-premise',
    link: '/chapter6',
    color: '#607D8B',
  },
  {
    id: 'chapter7',
    title: '🚀 Module 7: Capstone Project',
    description: 'Autonomous humanoid, voice-to-action pipeline, navigation, manipulation',
    link: '/chapter7',
    color: '#795548',
  },
];

function ChapterCard({id, title, description, link, color}) {
  return (
    <div className={clsx('col col--3', styles.chapterCard)} style={{borderTop: `4px solid ${color}`}}>
      <div className={styles.cardContent}>
        <Heading as="h3" className={styles.chapterTitle}>{title}</Heading>
        <p className={styles.chapterDescription}>{description}</p>
        <div className={styles.cardFooter}>
          <Link
            className="button button--primary button--sm"
            to={link}>
            Read Chapter →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.sectionTitle}>
              Textbook Chapters
            </Heading>
            <p className={styles.sectionSubtitle}>
              8 comprehensive modules covering Physical AI & Humanoid Robotics
            </p>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          {ChapterList.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
        <div className="row" style={{marginTop: '3rem', textAlign: 'center'}}>
        
        </div>
      </div>
    </section>
  );
}