export interface Exp {
  id: number; 
  position: string;
  title: string;
  company: string;
  date: string;
  img: string;
}

export interface Study{
  id: number;
  year: string;
  content: ContentStudie [];
}

export interface ContentStudie{
  id: number;
  year: string;
  grade: string;
  study_center: string;
  imgs: string [];
}

export interface ContentResume {
  experience: Exp [];
  studies: Study[];
} 
