export interface Course {
  title: string;
  type: string;
}

export interface Item {
  title: string;
  courses: Course[];
}