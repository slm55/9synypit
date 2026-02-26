export interface TestResult {
  name: string;
  score: number;
  maxScore: number;
}

export interface Project {
  title: string;
  description: string;
  grade: string;
  feedback: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  videoUrl?: string;
  imageUrl?: string;
  tools: string[];
}

export interface SyllabusItem {
  topic: string;
  status: 'Completed' | 'Current' | 'Upcoming';
  description: string;
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  important: boolean;
}

export interface Deadline {
  id: string;
  title: string;
  dueDate: string;
  type: 'Homework' | 'Project' | 'Quiz';
}

export interface Resource {
  title: string;
  url: string;
  type: 'Video' | 'Documentation' | 'Exercise';
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  attendance: number;
  testResults: TestResult[];
  midtermProject?: Project;
  feedback: string;
  syllabus: SyllabusItem[];
  announcements?: Announcement[];
  deadlines?: Deadline[];
  externalResourcesUrl: string;
}
