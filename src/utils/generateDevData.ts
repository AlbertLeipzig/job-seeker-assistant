import { faker } from "@faker-js/faker";
import { IApplication, IDocument } from "./types";

/* postings */
/* applications */

const techs = [
  { title: "node", categories: ["backend", "running time"] },
  { title: "js", categories: ["programing language"] },
  { title: "html", categories: ["programing language"] },
  { title: "css", categories: ["programing language"] },
  { title: "express", categories: ["backend", "api"] },
  { title: "react", categories: ["frontend"] },
  { title: "mongo", categories: ["backend", "db"] },
  { title: "sql", categories: ["backend", "db"] },
  { title: "docker", categories: ["devops"] },
  { title: "ts", categories: ["programing language"] },
  { title: "vitest", categories: ["testing"] },
  { title: "rollup", categories: ["bundler", "js"] },
  { title: "vue", categories: ["frontend"] },
  { title: "next", categories: ["frontend"] },
];

const generateRandomValue = (factor: number) =>
  Math.floor(Math.random() * factor);

const generateTechArray = () =>
  Array.from(
    new Set(
      Array.from({ length: generateRandomValue(10) }).map(
        () => techs[generateRandomValue(techs.length)].title
      )
    )
  );

// id: string;
// title: string;
// link: string;
// techStack: string[];
// company: string;
// date: Date;
// contactPerson: IPerson;

const generateSinglePosting = () => ({
  id: faker.database.mongodbObjectId(),
  title: faker.lorem.sentence(),
  link: faker.internet.url(),
  techStack: generateTechArray(),
  company: faker.company.name(),
  date: faker.date.anytime(),
  contactPerson: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
  },
});

const generateSingleNote = () => ({
  date: faker.date.anytime(),
  text: Array.from({ length: 3 }).map(() => faker.lorem.sentence()),
});

const generateDocument = (): IDocument => ({
  id: faker.database.mongodbObjectId(),
  name: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
});

const generateSingleApplication = (): IApplication => ({
  id: faker.database.mongodbObjectId(),
  subject: faker.lorem.sentence(),
  message: faker.lorem.paragraph(),
  contactPerson: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
  },
  coverLetter: Array.from({ length: 1 }, generateDocument),
  curriculum: Array.from({ length: 1 }, generateDocument),
  feedbackNotes: Array.from({ length: 3 }).map(() => generateSingleNote()),
});

export const generateMultipleDocuments = (
  generator: "posting" | "application"
) => {
  const generatorFunction =
    generator === "posting" ? generateSinglePosting : generateSingleApplication;
  if (!generator || typeof generator !== "string") {
    return;
  } else {
    return Array.from({ length: 30 }).map(() => generatorFunction());
  }
};
