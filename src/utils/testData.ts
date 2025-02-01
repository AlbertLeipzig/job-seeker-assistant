import { IAccordion } from "../components/Accordion";
import { IButton } from "../components/Button";
import { ICard } from "../components/Card";
import { TCarousel } from "../components/Carousel";
import { IContainer } from "../components/Container";
import { IGallery } from "../components/Gallery";
import { TList } from "../components/List";
import { IModal } from "../components/Modal";
import { TNavData } from "../components/Navigation";
import { IReview } from "../components/Review";
import { TSection } from "../components/Section";
import { ITable } from "../components/Table";
import { IToggle } from "../components/ToggleButton";
import { IFormField } from "../components/Form";
import { IHero } from "../components/Hero";
import { INotification } from "../components/Notification";
const accordionTestData: IAccordion[] = [
  {
    heading: "first",
    body: "asdñlfijasdñfljk",
  },
  {
    heading: "second",
    body: "sdfpíosjdrtoiasjrtgñsodigj",
  },
  {
    heading: "third",
    body: "sñnasdñf.jasnrlñaoushngñasjfgnñasogn",
  },
];

const buttonTestData: IButton = {
  text: "Don't Click Me",
  cbFunction: () => console.log("You Clicked me!!"),
  _class: "",
};

const cardTestData: ICard = {
  imgSrc:
    "https://images.unsplash.com/photo-1729505621471-ea543f4a0a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  title: "Card Title",
  button: buttonTestData,
};

const carouselTestData: TCarousel = [
  {
    src: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "1 img",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "2 img",
  },
  {
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "3 img",
  },
  {
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "4 img",
  },
  {
    src: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "1 img",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "2 img",
  },
  {
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "3 img",
  },
  {
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "4 img",
  },
];

const formTestData: IFormField[] = [
  {
    fieldKey: "name",
    fieldValue: "",
    fieldType: "text",
  },
  {
    fieldKey: "password",
    fieldValue: "password",
    fieldType: "password",
  },
];

const galleryTestData: IGallery = [
  {
    src: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "1 img",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "2 img",
  },
  {
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "3 img",
  },
  {
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    alt: "4 img",
  },
];

const heroTestData: IHero = {
  bgImage:
    "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  title: "Test Hero",
  body: "askldjfhasdlkfjha sdlfkjhas dflkjashd flkjasdhf lkasjdfh ",
  linkSrc: "/",
  linkText: "CTA",
};
const imageTestData = {
  src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
};

const listTestData: TList = ["first", "second", "third"];

const modalTestData: IModal = {
  title: "Test",
  body: "asldkfjh asdlkfjha sdlfkjhasdflkjasdh fklajsdfh lkasdjfh laskdjfh asldkfjh asdlkfjasdh f",
  state: true,
  setState: () => {},
};

const navTestData: TNavData = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const notificatonTestData: INotification = {
  title: "Ep!",
  body: "something that bla bla bla bla",
  state: false,
  setState: () => {},
};

const reviewTestData: IReview = {
  comment:
    "asdlfjas dfljkasdh flasdjfhasldufh asdlfjkash lfuashd fñashd lasdjfhasldfkjhasdlfjashd fljsah glaskjdfh laskdjfh asldkfjh aslkdfjh dasf",
  fullName: "Heinrich Wagner",
};

const sectionTestData: TSection = [
  {
    _type: "title",
    _value: "Test Section",
  },
  {
    _type: "paragraph",
    _value:
      "añsdlkfjañdfkj asdñlfkj asdñflkjasdfñlkasdjfñaskldjfasdñlfkjasñdfijasdñfoijasdfñoiasjd fñasidjf ñasoidjf ñasodifj asñdofij asdñofijas dñfoijsad f",
  },
  {
    _type: "image",
    _value:
      "https://images.unsplash.com/photo-1731566121399-cc28c206e0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    alt: "test alt text",
  },
];

const tableTestData: ITable = {
  caption: "Test Table",
  head: ["1", "2"],
  body: [
    { head: "first", data: ["a", "b", "c"] },
    { head: "second", data: ["d", "e", "f"] },
    { head: "first", data: ["a", "b", "c"] },
    { head: "second", data: ["d", "e", "f"] },
    { head: "first", data: ["a", "b", "c"] },
    { head: "second", data: ["d", "e", "f"] },
    { head: "first", data: ["a", "b", "c"] },
    { head: "second", data: ["d", "e", "f"] },
  ],
  foot: { head: "", data: [] },
};

const toggleTestData: IToggle = {
  state: true,
  setState: (prev) => !prev,
};

export const testData = {
  accordion: accordionTestData,
  button: buttonTestData,
  card: cardTestData,
  carousel: carouselTestData,
  form: formTestData,
  gallery: galleryTestData,
  hero: heroTestData,
  image: imageTestData,
  list: listTestData,
  modal: modalTestData,
  nav: navTestData,
  notification: notificatonTestData,
  review: reviewTestData,
  section: sectionTestData,
  table: tableTestData,
  toggle: toggleTestData,
};
