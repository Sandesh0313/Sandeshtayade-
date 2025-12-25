
import { Project, LearningPost, RabbitHole } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Retail Analytics Dashboard',
    problem: 'Retailers often struggle to identify clear trends in revenue and customer behavior across multiple channels.',
    why: 'I wanted to use DAX and Power BI to transform messy sales data into interactive visuals that actually drive decisions.',
    learned: 'Effective dashboarding isn\'t about the number of charts; it\'s about the clarity of the primary KPI.',
    status: 'Finished',
    link: 'https://github.com/sandesh-tayade/retail-analytics-dashboard'
  },
  {
    id: '2',
    title: 'Financial Metrics Automation',
    problem: 'Calculating KPIs like ROI and NPV manually is error-prone and consumes hours of analyst time.',
    why: 'To create a Python/Excel hybrid workflow that cleans financial datasets and outputs validated metrics instantly.',
    learned: 'Data validation at the source is 90% of the battle in financial automation.',
    status: 'Finished',
    link: 'https://github.com/sandesh-tayade/financial-automation-scripts'
  },
  {
    id: '3',
    title: 'Optimized Shopify Storefronts',
    problem: 'Generic e-commerce templates often suffer from slow load times and poor mobile UX.',
    why: 'Built custom Liquid and JavaScript modules to improve performance and user journey for high-traffic stores.',
    learned: 'Performance is a feature. Reducing load times by even a second directly impacts conversion.',
    status: 'Finished',
    link: 'https://github.com/sandesh-tayade/shopify-performance-optimization'
  }
];

export const LEARNING_POSTS: LearningPost[] = [
  {
    id: 'p1',
    title: 'Transitioning from Frontend to Data Analysis',
    date: '2024-12-15',
    topic: 'Career Pivot',
    excerpt: 'How building UI components taught me more about data structure than I expected.',
    content: 'Coming from a Frontend background, I used to think of data as something that just "populated" a component. Now, as a Financial Data Analyst Trainee, I see data as the product itself. The logic I used in JavaScript filters is surprisingly similar to complex SQL queries, but the stakes are higher when the output is a financial forecast.'
  },
  {
    id: 'p2',
    title: 'The "Black Box" of Alteryx Workflows',
    date: '2025-01-20',
    topic: 'ETL Tools',
    excerpt: 'Moving away from pure code to visual ETL tools like Alteryx—and why it matters for scale.',
    content: 'Alteryx can feel like a toy at first if you are used to writing Python scripts. But once you see the speed of documentation and the ease of hand-off, you realize why enterprises love it. I am currently exploring how to blend custom Python nodes into Alteryx for the best of both worlds.'
  }
];

export const RABBIT_HOLES: RabbitHole[] = [
  {
    id: 'r1',
    topic: 'Market Mechanics & Psychology',
    description: '5 years of dissecting charts and financial statements. I’m fascinated by how human sentiment translates into candle patterns and how "intrinsic value" is often a moving target. I balance RSI and MACD with DCF models.',
    intensity: 'Total Absorption'
  },
  {
    id: 'r2',
    topic: 'IoT & Edge Computing',
    description: 'Experimenting with ESP32 and Arduino for real-time sensor control. I once built a smart home system just to see if I could bypass proprietary hubs.',
    intensity: 'Deep Dive'
  },
  {
    id: 'r3',
    topic: 'Shopify Liquid Architecture',
    description: 'The weird, beautiful logic of Shopify\'s templating language. It is limited, which makes finding elegant solutions more satisfying.',
    intensity: 'Mildly Obsessed'
  },
  {
    id: 'r4',
    topic: 'Automation Ethics',
    description: 'Researching how automation in finance impacts job roles and where the "human-in-the-loop" is most critical.',
    intensity: 'Total Absorption'
  }
];
