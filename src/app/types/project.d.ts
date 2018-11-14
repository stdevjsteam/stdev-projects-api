export interface Project {
    readonly id: string;
    technology: string;
    name: string;
}

export interface PublicProjectsAttributes extends Project {
    developers: string;
}

export interface ExampleProjectsAttributes extends Project {
    repository: string;    
}